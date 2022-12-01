import React from "react";
import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    {/* <li>
                      <a href="#">About</a>
                    </li> */}
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    {/* <li>
                      <a href="#">About</a>
                    </li> */}
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    {/* <li>
                      <a href="#">About</a>
                    </li> */}
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Follow us</h2>
                  <div className="row">
                    <div className="col-3 max-auto">
                      <a href="https://www.facebook.com">
                        <FaFacebookF />
                      </a>
                    </div>
                    <div className="col-3 max-auto">
                      <a href="https://www.facebook.com">
                        <FaTwitter />
                      </a>
                    </div>
                    <div className="col-3 max-auto">
                      <a href="https://www.facebook.com">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  @{new Date().getFullYear()} Prama Technology © All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
