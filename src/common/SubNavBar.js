import React from 'react';
import './SubNavBar.css'; // Make sure to create this CSS file

const SubNavbar = () => {
    return (
        <div className="sub-navbar">
            <ul>
                <li><a href="/inspector-home">Home</a></li>
                <li><a href="/site-visit-post"> New Site Visit Form</a></li>
                <li><a href="#about">View Draft Report</a></li>
                <li><a href="#about">Submitted Report</a></li>
                <li><a href="#about">Approved Report</a></li>
                <li><a href="/inspector-home#rejected-reports">Rejected Report</a></li>
            </ul>
        </div>
    );
};

export default SubNavbar;