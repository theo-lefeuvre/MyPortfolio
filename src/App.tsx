import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ThesisPage from './pages/ThesisPage';
import PublicationsPage from './pages/PublicationsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import FormationPage from './pages/FormationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/thesis" element={<ThesisPage />} />
        <Route path="/publications" element={<PublicationsPage />} />

        
        <Route path="/activities" element={<ActivitiesPage />} />
       
        <Route path="/formation" element={<FormationPage />} />
         <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;