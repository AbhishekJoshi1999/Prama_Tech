import React from "react";
// import '../../App.css';
import servicesData from "../services.json";
import "../css/Services.css";

export default function Services() {
  return (
    <>
      <div className="row">
        <h2 className="section-heading">Our Services</h2>

        {/* <div className="row"></div> */}
        {/* <h1 className="services"> SERVICES </h1>; */}
        {servicesData.map((serviceData, index) => {
          return (
            <div className="column" key={serviceData.id}>
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fas fa-hammer"></i>
                </div>
                <h3>{serviceData.title}</h3>
                <p>{serviceData.descripion}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
