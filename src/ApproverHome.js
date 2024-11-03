import React from 'react';
import NavBar from './common/NavBar';
import './InspectorHome.css'; 
import SubNav from './common/SubNav';


const InspectorHome = () => {
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
        <SubNav />
    <div className="inspector-home">
      
    <div className="logout-icon">
            <a href="/" title="Logout">
              <i className="fas fa-sign-out-alt"></i> 
            </a>
          </div>
     
          <div className="welcome-title">
            <h1>Welcome Home</h1>
            <h2>Start the Day</h2>
          </div>
          
      <section className="upcoming-visits-card">
        <div className="upcoming-visits">
          <h2>Inspection Pending for Approval</h2>
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
      </div>
      </div>
  );
};

export default InspectorHome;