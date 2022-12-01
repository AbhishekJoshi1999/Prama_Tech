import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/components/Home/Home";
import About from "../src/components/About/About";
import Services from "../src/components/Services/Services";
import Contact from "../src/components/Contact/Contact";
// import contactnext from "./components/pages/contactnext";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about_us" exact element={<About />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/contact_us" exact element={<Contact />} />
         
        </Routes>
        
      </Router>
      <Footer className="footer"/>
     
    </>
  );
}

export default App;
