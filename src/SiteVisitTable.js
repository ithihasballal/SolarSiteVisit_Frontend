import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./SiteVisitTable.css";
import NavBar from './common/NavBar';
import SubNav from './common/SubNav';

const SiteVisitTable = () => {
  const [siteVisits, setSiteVisits] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/site-visits');
        setSiteVisits(response.data);
      } catch (err) {
        setError("There was an error fetching the data.");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/view-details/${id}`); // Navigate to the details page with the ID
  };

  return (
    <div>
      <NavBar />
      <SubNav />
      <div>
        {error && <p>{error}</p>}
        <div className="inspection-inbox">
          {siteVisits.map((siteVisit) => (
            <div className="inspection-card" key={siteVisit.id}>
              <h3>Name of Borrower: {siteVisit.borrower_name || "N/A"}</h3>
              <p>Project Details: {siteVisit.project_details || "N/A"}</p>
              <p>COD Date: {siteVisit.cod_date || "N/A"} </p>
              <button className="view-button" onClick={() => handleViewDetails(siteVisit.id)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiteVisitTable;
