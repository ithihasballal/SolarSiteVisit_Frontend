import React, {useState ,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './common/NavBar';
import './InspectorHome.css'; 
import SubNavBar from './common/SubNavBar';



const InspectorHome = () => {
  const location = useLocation();
  const [rejectedReports, setRejectedReports] = useState([]);

  // Use location.state to check if a rejection message is passed
  useEffect(() => {
    if (location.state && location.state.rejectionMessage) {
      // Add the rejection message to the rejectedReports array
      setRejectedReports(prev => [...prev, location.state.rejectionMessage]);
    }
  }, [location.state]);

  const upcomingVisits = [
    {
      title: 'Name of Borrower – DEF Ltd.',
      location: 'Mumbai',
      date: '17th Oct 2023',
    },
    {
      title: 'Name of Borrower – DEF Ltd.',
      location: 'Mumbai',
      date: '17th Oct 2023',
    },
  ];

  const summaryData = [
    { count: 35, label: 'Site Visit Report Submitted' },
    { count: 30, label: 'Site Visit Report Approved' },
    { count: 5, label: 'Site Visit Report Rejected' },
  ];

  return (
    <div>
        <NavBar/>
        <SubNavBar />
    <div className="inspector-home">
      
    <div className="logout-icon">
            <a href="/" title="Logout">
              <i className="fas fa-sign-out-alt"></i> 
            </a>
          </div>
     
          <div className="welcome-title">
            <h1>Welcome Home</h1>
            <h2>Inspector Start the Day</h2>
          </div>
          
      <section className="upcoming-visits-card">
        <div className="upcoming-visits">
          <h2>Upcoming Site Visits</h2>
          {upcomingVisits.map((visit, index) => (
            <div key={index} className="visit-card">
              <h3>{visit.title}</h3>
              <p>Location – {visit.location}</p>
              <p>Draft date – {visit.date}</p>
              <button>View</button>
            </div>
          ))}
        </div>
      </section>

        
     
      <section className="summary-cards">
        {summaryData.map((summary, index) => (
          <div key={index} className="summary-card">
            <h4>{summary.count}</h4>
            <p>{summary.label}</p>
          </div>
        ))}
      </section>


      {/* Rejected Reports Section */}
      <section className="rejected-reports">
          <h2>Rejected Reports</h2>
          {rejectedReports.length > 0 ? (
            rejectedReports.map((report, index) => (
              <div key={index} className="rejected-report-item">
                <p>{report}</p>
              </div>
            ))
          ) : (
            <p>No rejected reports yet.</p>
          )}
        </section>
      </div>
      </div>
  );
};

export default InspectorHome;