import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditInspectorPage = () => {
    const { site_visit_id } = useParams(); // Get the site_visit_id from the URL
    const [notification, setNotification] = useState(null);
    const [formData, setFormData] = useState({
        borrower_name: '',
        project_details: '',
        cod_date: '',
        google_maps_link: '',
        site_visit_date: '',
        visited_prepared_by: '',
        dealing_officer: '',
        approach_road: '',
        fencing: '',
        signboard: '',
        induction_for_visitors: '',
        site_personnel_site_managers: '',
        site_personnel_om_personnel: '',
        site_personnel_security_staff: '',
        separate_facilities: '',
        mounting_structures: '',
        near_shading: '',
        drainage: '',
        wire_arrangement: '',
        wire_quality: '',
        loose_wires: '',
        panel_quality: '',
        cleaning_frequency: '',
        cleaning_technology: '',
        cleaning_in_progress: '',
        cleaning_quality: '',
        cooperation_level: '',
        grid_issues: '',
        performance_data: '',
        logs_issue: '',
        key_policies_displayed: '',
        third_party_contractors: '',
        hazardous_waste_disposal: '',
        water_source: '',
        groundwater_noc: '',
        rainwater_harvesting: '',
        soil_quality_impact: '',
        local_agitation: '',
        biodiversity_incidents: '',
        bird_guard_installed: '',
        lightning_arrestors: '',
        incident_records: '',
        remedial_action: '',
        ehs_training: '',
        fire_fighting_system: '',
        first_aid_kit: '',
        ambulance_stored: '',
        anti_venom_kit: '',
        social_security_benefits: '',
        child_labor_observed: '',
        overall_site_visit: '',
        additional_observations: '',
    });

    const navigate = useNavigate();

    // Fetch the notification details using the site_visit_id
    useEffect(() => {
        const fetchNotification = async () => {
            console.log('Fetching notification for site_visit_id:', site_visit_id); // Debugging log
            try {
                const response = await fetch(`http://localhost:8081/api/notifications/${site_visit_id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch notification');
                }
                const data = await response.json();
                console.log('Fetched notification data:', data); // Debugging log
                const notificationData = data[0];  // Assuming the response is an array
                setNotification(notificationData);
                setFormData({
                    borrower_name: notificationData.borrower_name || '',
                    project_details: notificationData.project_details || '',
                    cod_date: notificationData.cod_date || '',
                    google_maps_link: notificationData.google_maps_link || '',
                    site_visit_date: notificationData.site_visit_date || '',
                    visited_prepared_by: notificationData.visited_prepared_by || '',
                    dealing_officer: notificationData.dealing_officer || '',
                    approach_road: notificationData.approach_road || '',
                    fencing: notificationData.fencing || '',
                    signboard: notificationData.signboard || '',
                    induction_for_visitors: notificationData.induction_for_visitors || '',
                    site_personnel_site_managers: notificationData.site_personnel_site_managers || '',
                    site_personnel_om_personnel: notificationData.site_personnel_om_personnel || '',
                    site_personnel_security_staff: notificationData.site_personnel_security_staff || '',
                    separate_facilities: notificationData.separate_facilities || '',
                    mounting_structures: notificationData.mounting_structures || '',
                    near_shading: notificationData.near_shading || '',
                    drainage: notificationData.drainage || '',
                    wire_arrangement: notificationData.wire_arrangement || '',
                    wire_quality: notificationData.wire_quality || '',
                    loose_wires: notificationData.loose_wires || '',
                    panel_quality: notificationData.panel_quality || '',
                    cleaning_frequency: notificationData.cleaning_frequency || '',
                    cleaning_technology: notificationData.cleaning_technology || '',
                    cleaning_in_progress: notificationData.cleaning_in_progress || '',
                    cleaning_quality: notificationData.cleaning_quality || '',
                    cooperation_level: notificationData.cooperation_level || '',
                    grid_issues: notificationData.grid_issues || '',
                    performance_data: notificationData.performance_data || '',
                    logs_issue: notificationData.logs_issue || '',
                    key_policies_displayed: notificationData.key_policies_displayed || '',
                    third_party_contractors: notificationData.third_party_contractors || '',
                    hazardous_waste_disposal: notificationData.hazardous_waste_disposal || '',
                    water_source: notificationData.water_source || '',
                    groundwater_noc: notificationData.groundwater_noc || '',
                    rainwater_harvesting: notificationData.rainwater_harvesting || '',
                    soil_quality_impact: notificationData.soil_quality_impact || '',
                    local_agitation: notificationData.local_agitation || '',
                    biodiversity_incidents: notificationData.biodiversity_incidents || '',
                    bird_guard_installed: notificationData.bird_guard_installed || '',
                    lightning_arrestors: notificationData.lightning_arrestors || '',
                    incident_records: notificationData.incident_records || '',
                    remedial_action: notificationData.remedial_action || '',
                    ehs_training: notificationData.ehs_training || '',
                    fire_fighting_system: notificationData.fire_fighting_system || '',
                    first_aid_kit: notificationData.first_aid_kit || '',
                    ambulance_stored: notificationData.ambulance_stored || '',
                    anti_venom_kit: notificationData.anti_venom_kit || '',
                    social_security_benefits: notificationData.social_security_benefits || '',
                    child_labor_observed: notificationData.child_labor_observed || '',
                    overall_site_visit: notificationData.overall_site_visit || '',
                    additional_observations: notificationData.additional_observations || '',
                });
            } catch (err) {
                console.error('Error fetching notification:', err);
            }
        };

        fetchNotification();
    }, [site_visit_id]);

    // Handle form data change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission (Save)
    const handleSave = async (e) => {
        e.preventDefault();
        const updatedNotification = formData;

        try {
            const response = await fetch(`http://localhost:8081/api/notifications/${site_visit_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedNotification),
            });

            if (response.ok) {
                // Navigate back to the home page or to the updated notification's detail page
                navigate('/');
            } else {
                console.error('Failed to update the notification');
            }
        } catch (err) {
            console.error('Error saving notification:', err);
        }
    };

    // If the notification is not yet fetched, display a loading state
    if (!notification) return <div>Loading...</div>;

    return (
        <div className="edit-inspector-page">
            <h2>Edit Notification</h2>
            <form onSubmit={handleSave}>
                {Object.keys(formData).map((key) => (
                    <div key={key}>
                        <label>{key.replace(/_/g, ' ').toUpperCase()}:</label>
                        <input
                            type={key.includes('date') ? 'date' : 'text'}
                            name={key}
                            value={formData[key] || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                ))}
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditInspectorPage;
