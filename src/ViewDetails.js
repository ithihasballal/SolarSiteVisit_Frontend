import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from './common/NavBar';
import SubNav from './common/SubNav';

const ViewDetails = () => {
    const { id } = useParams(); // Extract the ID from the URL parameters
    const [siteVisit, setSiteVisit] = useState(null);
    const [error, setError] = useState(null);
    const [comment, setComment] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/site-visits/${id}`);
                setSiteVisit(response.data);
            } catch (err) {
                setError("There was an error fetching the details.");
                console.error(err);
            }
        };

        fetchDetails();
    }, [id]); // Fetch details whenever the ID changes

    // Handle Approve Button (Download PDF)
    const handleApprove = async () => {
        try {
            const response = await axios({
                url: `http://localhost:8081/api/site-visits/${id}/download-pdf`,
                method: 'POST',
                responseType: 'blob' // Set the response type to handle binary data
            });

            // Create a download link from the blob
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `site_visit_${id}.pdf`); // Set file name for download
            document.body.appendChild(link);
            link.click();

            // Clean up
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url); // Revoke the object URL after download
        } catch (error) {
            console.error("Error downloading PDF:", error);
            setError("Failed to download the PDF.");
        }
    };


    // Handle Reject Button (Send Rejection Notification)
    const handleReject = async () => {
        try {
            const response = await axios.post(`http://localhost:8081/api/site-visits/${id}/reject`, {
                message: "Your form is rejected."
            });
            alert(response.data.message); // Show the rejection message in an alert
            navigate('/site-visits'); // Redirect to SiteVisitPost page
        } catch (error) {
            console.error("Error rejecting the form:", error);
            setError("Failed to reject the form.");
        }
    };

    if (error) {
        return <p>{error}</p>;
    }

    if (!siteVisit) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <NavBar />
            <SubNav />
            <div>
                <form>
                <h2>Site Visit Details</h2>
                    <label>
                        Name of Borrower:
                        <input type="text" name="borrower_name" value={siteVisit.borrower_name || ""} required />
                    </label>
                    <label>
                        Project Details:
                        <textarea name="project_details" value={siteVisit.project_details || ""} required />
                    </label>
                    <label>
                        COD Date:
                        <input type="date" name="cod_date" value={siteVisit.cod_date ? new Date(siteVisit.cod_date).toISOString().split("T")[0] : ""} required />
                    </label>
                    <label>
                        Google Maps Link:
                        <input type="text" name="google_maps_link" value={siteVisit.google_maps_link || ""} />
                    </label>
                    <label>
                        Date of Site Visit:
                        <input type="date" name="site_visit_date" value={siteVisit.site_visit_date ? new Date(siteVisit.site_visit_date).toISOString().split("T")[0] : ""} required />
                    </label>
                    <label>
                        Visited & Prepared by:
                        <input type="text" name="visited_prepared_by" value={siteVisit.visited_prepared_by || ""} required />
                    </label>
                    <label>
                        Dealing Officer:
                        <input type="text" name="dealing_officer" value={siteVisit.dealing_officer || ""} required />
                    </label>
                    <label>
                        Approach Road Condition:
                        <input type="text" name="approach_road" value={siteVisit.approach_road || ""} />
                    </label>
                    <label>
                        Fencing:
                        <input type="text" name="fencing" value={siteVisit.fencing || ""} />
                    </label>
                    <label>
                        Signboard Mentioning Project Name:
                        <input type="text" name="signboard" value={siteVisit.signboard || ""} />
                    </label>
                    <label>
                        Induction for Visitors:
                        <input type="text" name="induction_for_visitors" value={siteVisit.induction_for_visitors || ""} />
                    </label>
                    <label>
                        Number of Site Personnel - Site Managers:
                        <input type="number" name="site_personnel_site_managers" value={siteVisit.site_personnel_site_managers || ""} />
                    </label>
                    <label>
                        Number of Site Personnel - O&M Personnel:
                        <input type="number" name="site_personnel_om_personnel" value={siteVisit.site_personnel_om_personnel || ""} />
                    </label>
                    <label>
                        Number of Site Personnel - Security Staff:
                        <input type="number" name="site_personnel_security_staff" value={siteVisit.site_personnel_security_staff || ""} />
                    </label>
                    <label>
                        Separate Facilities for Storage/Office/SCADA Room:
                        <input type="text" name="separate_facilities" value={siteVisit.separate_facilities || ""} />
                    </label>
                    <label>
                        Type of Mounting Structures:
                        <input type="text" name="mounting_structures" value={siteVisit.mounting_structures || ""} />
                    </label>
                    <label>
                        Near Shading:
                        <input type="text" name="near_shading" value={siteVisit.near_shading || ""} />
                    </label>
                    <label>
                        Drainage:
                        <input type="text" name="drainage" value={siteVisit.drainage || ""} />
                    </label>
                    <label>
                        Wire Arrangement:
                        <input type="text" name="wire_arrangement" value={siteVisit.wire_arrangement || ""} />
                    </label>
                    <label>
                        Wire Quality:
                        <input type="text" name="wire_quality" value={siteVisit.wire_quality || ""} />
                    </label>
                    <label>
                        Loose Wires:
                        <input type="text" name="loose_wires" value={siteVisit.loose_wires || ""} />
                    </label>
                    <label>
                        Panel Quality:
                        <input type="text" name="panel_quality" value={siteVisit.panel_quality || ""} />
                    </label>
                    <label>
                        Cleaning Frequency:
                        <input type="text" name="cleaning_frequency" value={siteVisit.cleaning_frequency || ""} />
                    </label>
                    <label>
                        Cleaning Technology Used:
                        <input type="text" name="cleaning_technology" value={siteVisit.cleaning_technology || ""} />
                    </label>
                    <label>
                        Cleaning in Progress:
                        <input type="text" name="cleaning_in_progress" value={siteVisit.cleaning_in_progress || ""} />
                    </label>
                    <label>
                        Cleaning Quality:
                        <input type="text" name="cleaning_quality" value={siteVisit.cleaning_quality || ""} />
                    </label>
                    <label>
                        Level of Cooperation from Site Personnel:
                        <input type="text" name="cooperation_level" value={siteVisit.cooperation_level || ""} />
                    </label>
                    <label>
                        Any Grid Issues:
                        <input type="text" name="grid_issues" value={siteVisit.grid_issues || ""} />
                    </label>
                    <label>
                        Performance Data:
                        <input type="text" name="performance_data" value={siteVisit.performance_data || ""} />
                    </label>
                    <label>
                        Logs Issue:
                        <input type="text" name="logs_issue" value={siteVisit.logs_issue || ""} />
                    </label>
                    <label>
                        Key Policies Displayed:
                        <input type="text" name="key_policies_displayed" value={siteVisit.key_policies_displayed || ""} />
                    </label>
                    <label>
                        Third Party Contractors on Site:
                        <input type="text" name="third_party_contractors" value={siteVisit.third_party_contractors || ""} />
                    </label>
                    <label>
                        Hazardous Waste Disposal:
                        <input type="text" name="hazardous_waste_disposal" value={siteVisit.hazardous_waste_disposal || ""} />
                    </label>
                    <label>
                        Water Source:
                        <input type="text" name="water_source" value={siteVisit.water_source || ""} />
                    </label>
                    <label>
                        Groundwater NOC:
                        <input type="text" name="groundwater_noc" value={siteVisit.groundwater_noc || ""} />
                    </label>
                    <label>
                        Rainwater Harvesting:
                        <input type="text" name="rainwater_harvesting" value={siteVisit.rainwater_harvesting || ""} />
                    </label>
                    <label>
                        Soil Quality Impact:
                        <input type="text" name="soil_quality_impact" value={siteVisit.soil_quality_impact || ""} />
                    </label>
                    <label>
                        Local Agitation:
                        <input type="text" name="local_agitation" value={siteVisit.local_agitation || ""} />
                    </label>
                    <label>
                        Biodiversity Incidents:
                        <input type="text" name="biodiversity_incidents" value={siteVisit.biodiversity_incidents || ""} />
                    </label>
                    <label>
                        Bird Guard Installed:
                        <input type="text" name="bird_guard_installed" value={siteVisit.bird_guard_installed || ""} />
                    </label>
                    <label>
                        Lightning Arrestors Installed:
                        <input type="text" name="lightning_arrestors" value={siteVisit.lightning_arrestors || ""} />
                    </label>
                    <label>
                        Incident Records:
                        <input type="text" name="incident_records" value={siteVisit.incident_records || ""} />
                    </label>
                    <label>
                        Remedial Action Taken:
                        <input type="text" name="remedial_action" value={siteVisit.remedial_action || ""} />
                    </label>
                    <label>
                        EHS Training Conducted:
                        <input type="text" name="ehs_training" value={siteVisit.ehs_training || ""} />
                    </label>
                    <label>
                        Fire Fighting System:
                        <input type="text" name="fire_fighting_system" value={siteVisit.fire_fighting_system || ""} />
                    </label>
                    <label>
                        First Aid Kit Available:
                        <input type="text" name="first_aid_kit" value={siteVisit.first_aid_kit || ""} />
                    </label>
                    <label>
                        Ambulance Available:
                        <input type="text" name="ambulance_stored" value={siteVisit.ambulance_stored || ""} />
                    </label>
                    <label>
                        Anti-Venom Kit Available:
                        <input type="text" name="anti_venom_kit" value={siteVisit.anti_venom_kit || ""} />
                    </label>
                    <label>
                        Social Security Benefits:
                        <input type="text" name="social_security_benefits" value={siteVisit.social_security_benefits || ""} />
                    </label>
                    <label>
                        Child Labor Observed:
                        <input type="text" name="child_labor_observed" value={siteVisit.child_labor_observed || ""} />
                    </label>
                    <label>
                        Overall Site Visit Feedback:
                        <input type="text" name="overall_site_visit" value={siteVisit.overall_site_visit || ""} />
                    </label>
                    <label>
                        Additional Observations:
                        <textarea name="additional_observations" value={siteVisit.additional_observations || ""} />
                    </label>

                </form>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Enter your comment here..."
                        rows={3}
                        style={{ width: '200px', marginRight: '10px' }} // Style for the comment field
                    />
                    <button
                        onClick={handleApprove}
                        style={{
                            width: '90px',  // Reduced width
                            padding: '8px', // Reduced padding
                            fontSize: '14px', // Reduced font size
                            backgroundColor: 'green',
                            color: 'white',
                            margin: '0 5px'  // Equal margin on both sides for spacing
                        }}
                    >
                        Approve
                    </button>
                    <button
                        onClick={handleReject}
                        style={{
                            width: '90px',  // Reduced width
                            padding: '8px', // Reduced padding
                            fontSize: '14px', // Reduced font size
                            backgroundColor: 'red',
                            color: 'white',
                            margin: '0 5px'  // Equal margin on both sides for spacing
                        }}
                    >
                        Reject
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
