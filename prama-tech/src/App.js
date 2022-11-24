import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/css/App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
// import contactnext from "./components/pages/contactnext";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;
