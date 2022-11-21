import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/aboutus' exact element={<About />} />
        <Route path='/services' exact element={<Services />} />
        <Route path='/contactus' exact element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
