import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProjectsPage from './Pages/Projects';
import ContactPage from './Pages/Contact';
import NavBar from './Components/Navbar';
import ExpPage from './Pages/Experience';
import './App.css';

const App = () => {


  return (
    <Router>
      <div id='page-container'>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<ExpPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
