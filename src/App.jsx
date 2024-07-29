import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import Resume from './components/Resume';
import './App.css';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Aboutme" element={< Aboutme />} />
        <Route path="/Resume" element={< Resume />} />

      </Routes>
    </Router>
  );
}

export default App;
