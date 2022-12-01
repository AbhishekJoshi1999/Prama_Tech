import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Numbers from './Numbers'

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_42en1yn",
        "template_10o8iso",
        e.target,
        "TT0GSmwt9-mSCtItO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const contactConfig = { 
    YOUR_ADDRESS: "Balbhadra Chowk, Tikapur Municipality, Kailali, Nepal",
    YOUR_EMAIL: "pramatech2020@gmail.com",
    YOUR_PHONE: "+977-9825603526 / 091-560489",
  };

  return (
    <Container>
      <Row className="mb-8 mt-3">
        <Col lg="11">
          <h1 className="display-5 mb-4">Contact Us</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">CONNECT WITH US</h3>
          <address>
          {contactConfig.hasOwnProperty("YOUR_ADDRESS") ? (
              <p>
                <strong>Address:</strong> {contactConfig.YOUR_ADDRESS}
              </p> 
               ) : ("")}
              <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a></p>
          
            {contactConfig.hasOwnProperty("YOUR_PHONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_PHONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact__form w-100" onSubmit={sendEmail}>
            <Row>
              <Col lg="8" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="user_name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </Col>
              </Row>
                
              <Row>
              
              <Numbers />
              </Row>
              <Row>
              <Col lg="8" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="user_email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col lg="8" className="form-group">
              <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder="Message"
                  type="text"
                  rows="4"
                  required
                >
                </textarea>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn btn-primary" type="submit">
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}



