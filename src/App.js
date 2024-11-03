// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteVisitPost from './SiteVisitPost';
import SiteVisitTable from './SiteVisitTable';
import ViewDetails from './ViewDetails';
import Login from './Login';
import InspectorHome from './InspectorHome';
import ApproverHome from './ApproverHome';
import './App.css';

const App = () => {
  return (
        <Router>
          <Routes>
            <Route path= "/" element={<Login />}  />
            <Route path="/approver-home"  element =  {<ApproverHome />} />
            <Route path="/inspector-home" element={<InspectorHome />} />
            <Route path="/site-visit-post" element={<SiteVisitPost/>} />
            <Route path="/site-visits" element={<SiteVisitTable />} />
            <Route path="/view-details/:id" element={<ViewDetails />} />
          </Routes>
        </Router>
      );
    }

export default App;
