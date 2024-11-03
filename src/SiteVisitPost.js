import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './common/NavBar';
import SubNavBar from './common/SubNavBar';

const SiteVisitPost= () => {
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
    additional_observations: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inside function")

    // Send form data to backend
    axios.post('http://localhost:8081/api/site-visits', formData)
      .then(response => {
        alert(response.data.message);
        console.log("res",response.data)
      })
      .catch(error => {
        console.error("There was an error saving the form data!", error);
      });
  };

  return (
    <div>  
    <NavBar />
    <SubNavBar />
    <form onSubmit={handleSubmit}>
      <h2>Site Visit Form - Inspector</h2>

      <label>Name of Borrower</label>
      <input type="text" name="borrower_name" value={formData.borrower_name} onChange={handleInputChange} />

      <label>Details of Project - Location, Capacity, Offtaker</label>
      <input type="text" name="project_details" value={formData.project_details} onChange={handleInputChange} />

      <label>COD Date</label>
      <input type="date" name="cod_date" value={formData.cod_date} onChange={handleInputChange} />

      <label>Google Maps Link</label>
      <input type="text" name="google_maps_link" value={formData.google_maps_link} onChange={handleInputChange} />

      <label>Date of Site Visit</label>
      <input type="date" name="site_visit_date" value={formData.site_visit_date} onChange={handleInputChange} />

      <label>Visited & Prepared by</label>
      <input type="text" name="visited_prepared_by" value={formData.visited_prepared_by} onChange={handleInputChange} />

      <label>Dealing Officer</label>
      <input type="text" name="dealing_officer" value={formData.dealing_officer} onChange={handleInputChange} />

      <label>Approach Road Condition</label>
      <select name="approach_road" value={formData.approach_road} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Easily accessible and approach road well maintained">Easily accessible and approach road well maintained</option>
        <option value="Accessibility not too good/approach road quality was average">Accessibility not too good/approach road quality was average</option>
        <option value="Condition of approach road is terrible">Condition of approach road is terrible</option>
      </select>

      <label>Fencing</label>
      <select name="fencing" value={formData.fencing} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Concrete">Concrete</option>
        <option value="Barbed wire">Barbed wire</option>
        <option value="No fencing">No fencing</option>
      </select>

      <label>Signboard Mentioning Project Name</label>
      <select name="signboard" value={formData.signboard} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Proper induction conducted detailing all safety related issues/ no entry without jacket and helmet allowed">Proper induction conducted detailing all safety related issues/ no entry without jacket and helmet allowed</option>
        <option value="Induction stipulated as per process manual, however, same is not followed diligently">Present but not erected properly/not clearly visible</option>
        <option value="No induction for visitors conducted. Process manual doesn't mention the same">Absent</option>
      </select>

      <label>Induction for Visitors</label>
      <select name="induction_for_visitors" value={formData.induction_for_visitors} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Proper induction conducted">Proper induction conducted</option>
        <option value="Induction stipulated as per manual but not followed">Induction stipulated as per manual but not followed</option>
        <option value="No induction for visitors conducted">No induction for visitors conducted</option>
      </select>

      <label>Number of Site Personnel - Site Managers</label>
      <input type="number" name="site_personnel_site_managers" value={formData.site_personnel_site_managers} onChange={handleInputChange} />

      <label>Number of Site Personnel - O&M Personnel</label>
      <input type="number" name="site_personnel_om_personnel" value={formData.site_personnel_om_personnel} onChange={handleInputChange} />

      <label>Number of Site Personnel - Security Staff</label>
      <input type="number" name="site_personnel_security_staff" value={formData.site_personnel_security_staff} onChange={handleInputChange} />

      <label>Separate Facilities for Storage/Office/SCADA Room</label>
      <select name="separate_facilities" value={formData.separate_facilities} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Type of Mounting Structures</label>
      <select name="mounting_structures" value={formData.mounting_structures} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Fixed">Fixed</option>
        <option value="With tracker">With tracker</option>
      </select>

      <label>Near Shading</label>
      <select name="near_shading" value={formData.near_shading} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="No near shading observed">No near shading observed</option>
        <option value="Near shading due to improper module panel row distance">Near shading due to improper module panel row distance</option>
        <option value="Near shading due to overgrown grass">Near shading due to overgrown grass</option>
      </select>

      <label>Drainage</label>
      <select name="drainage" value={formData.drainage} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Natural drainage, hence drainage system is not required- no water logging observed">Natural drainage - no water logging</option>
        <option value="Natural drainage, hence drainage system is not required- though water logging is observed on site">Natural drainage - water logging observed</option>
        <option value="No natural drainage, hence proper drainage infrastructure has been put in place - no water logging observed">Proper drainage infrastructure - no water logging</option>
        <option value="No natural drainage, hence proper drainage infrastructure has been put in place- though water logging is observed on site.">Proper drainage infrastructure - water logging observed</option>
      </select>

      <label>Wire Arrangement</label>
      <select name="wire_arrangementt" value={formData.wire_arrangement} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Underground">Underground</option>
        <option value="Not underground, though placed on support trays and/or properly concealed">Not underground, though placed on support trays and/or properly concealed</option>
        <option value="Not underground, no tray arrangement either">Not underground, no tray arrangement either</option>
      </select>

      <label>Wire Quality</label>
      <select name="wire_quality" value={formData.wire_quality} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="In good condition">In good condition</option>
        <option value="Corroded/ burnt wires observed">Corroded/ burnt wires observed</option>
        <option value="Animal bites observed">Animal bites observed</option>
      </select>

      <label>Loose Wires observed</label>
      <select name="loose_wires" value={formData.loose_wires} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Module Quality</label>
      <select name="panel_quality" value={formData.panel_quality} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="In good condition">In good condition</option>
        <option value="Broken/ Damaged panels observed">Broken/ Damaged panels observed</option>
      </select>

      <label>Module Cleaning Frequency based on logs maintained on site</label>
      <select name="cleaning_frequency" value={formData.cleaning_frequency} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Once in a month">Once in a month</option>
        <option value="Twice in a month">Twice in a month</option>
        <option value="Logs not maintained">Logs not maintained</option>
        <option value="Any other frequency (please specify)">Any other frequency (please specify)</option>
      </select>

      <label>Cleaning Technique</label>
      <input type="text" name="cleaning_technology" value={formData.cleaning_technology} onChange={handleInputChange} />

      <label>Cleaning Progress</label>
      <input type="text" name="cleaning_in_progress" value={formData.cleaning_in_progress} onChange={handleInputChange} />

      <label>Cleaning Quality</label>
      <input type="text" name="cleaning_quality" value={formData.cleaning_quality} onChange={handleInputChange} />

      <label>Level of Cooperation</label>
      <select name="cooperation_level" value={formData.cooperation_level} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Average">Average</option>
        <option value="Poor">Poor</option>
      </select>

      <label>Grid Issues</label>
      <select name="grid_issues" value={formData.grid_issues} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Performance Data Availability</label>
      <select name="performance_data" value={formData.performance_data} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Logs Availability</label>
      <select name="logs_issue" value={formData.logs_issue} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Display of Policies</label>
      <select name="key_policies_displayed" value={formData.key_policies_displayed} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Displayed">Displayed</option>
        <option value="Not displayed">Not displayed</option>
      </select>

      <label>Third Party Contractors on Site</label>
      <select name="third_party_contractors" value={formData.third_party_contractors} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Waste Disposal Practices</label>
      <select name="hazardous_waste_disposal" value={formData.hazardous_waste_disposal} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Proper disposal">Proper disposal</option>
        <option value="Improper disposal">Improper disposal</option>
      </select>

      <label>Water Source</label>
      <select name="water_source" value={formData.water_source} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Potable">Potable</option>
        <option value="Non-potable">Non-potable</option>
      </select>

      <label>Ground Water NOC</label>
      <select name="groundwater_noc" value={formData.groundwater_noc} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Rainwater Harvesting</label>
      <select name="rainwater_harvesting" value={formData.rainwater_harvesting} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Soil Impact Assessment</label>
      <select name="soil_quality_impact" value={formData.soil_quality_impact} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Local Agitation</label>
      <select name="local_agitation" value={formData.local_agitation} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Biodiversity Incidents</label>
      <select name="biodiversity_incidents" value={formData.biodiversity_incidents} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Bird Guard Installed</label>
      <select name="bird_guard_installed" value={formData.bird_guard_installed} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Lightning Arrestors</label>
      <select name="lightning_arrestors" value={formData.lightning_arrestors} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Accident Records</label>
      <select name="incident_records" value={formData.incident_records} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Remedial Actions</label>
      <select name="remedial_action" value={formData.remedial_action} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>EH&S Training</label>
      <select name="ehs_training" value={formData.ehs_training} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Firefighting System</label>
      <select name="fire_fighting_system" value={formData.fire_fighting_system} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>First Aid Kit</label>
      <select name="first_aid_kit" value={formData.first_aid_kit} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Emergency Vehicle Available</label>
      <select name="ambulance_stored" value={formData.ambulance_stored} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Anti-Venom Kit</label>
      <select name="anti_venom_kit" value={formData.anti_venom_kit} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Social Security Records Available</label>
      <select name="social_security_benefits" value={formData.social_security_benefits} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Child Labor</label>
      <select name="child_labor_observed" value={formData.child_labor_observed} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label>Overall Site Visit</label>
      <select name="overall_site_visit" value={formData.overall_site_visit} onChange={handleInputChange}>
        <option value="">Select</option>
        <option value="Satisfactory">Satisfactory</option>
        <option value="Unsatisfactory">Unsatisfactory</option>
      </select>

      <label>Other Observations</label>
      <textarea name="additional_observations" value={formData.additional_observations} onChange={handleInputChange}></textarea>

      <button type="submit">Submit</button>
    </form>
    
    </div>
  );
};

export default SiteVisitPost;
