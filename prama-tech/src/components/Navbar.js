// import React, { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
// import { social } from "./data";
import './css/Navbar.css'
// import logo from "../prama_logo.jpg";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            {/* <img src={logo} alt="logo" /> */}
            <button className="nav-toggle">{/* <FaTwitter /> */}</button>
          </div>

          <div className="links-container show-container">
            <ul className="links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="services">Our Services</a>
              </li>
              <li>
                <a href="contact_us">Contact Us</a>
              </li>
            </ul>
          </div>

          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;