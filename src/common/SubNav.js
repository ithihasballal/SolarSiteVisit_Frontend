import React from 'react';
import './SubNavBar.css'; // Make sure to create this CSS file

const SubNavbar = () => {
    return (
        <div className="sub-navbar">
            <ul>
                <li><a href="/approver-home">Home</a></li>
                <li><a href="/site-visits">Inspection Box</a></li>
                <li><a href="#about">Approverd Inspection</a></li>
                <li><a href="#about">Rejected Inspection</a></li>
            </ul>
        </div>
    );
};

export default SubNavbar;