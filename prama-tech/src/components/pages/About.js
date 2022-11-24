// import React, { Fragment } from "react";
// // import '../css/App.css';
// import Content from '../Content'
// import '../css/About.css'

// const About = () => {
//     return (
//     <>
//     <div className="about">
//     <Content  />
//     </div>

//     </>
//     )
// }
// export default About;

import React from "react";
import "../css/About.css";
// import Pic from '../../images/pic1.jpg'



function About() {
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1 className="dis">Hello, Welcome to our about page. </h1>
          <h2 className="head">You will learn more about our company here.</h2>
        </div>
      </div>
          <p className="para1">Prama Technology Pvt. Ltd. is an IT industry established in 2020, located in Kailali, Nepal. We are a
         company involved in the design, development, testing and maintenance of the system. Beside that we also provide the services
         for Digital Marketing, sales and maintenance of the computer and their latest parts as well as networking related work of 
         our clients.
      </p>
      <p className="para2">We established this company to provide different services of Modern Technology for our clients. 
        Tikapur area is still behind in digital technology compared to other cities of Nepal, so we are here to modernize 
        this city and your business. We use modern technical tools such as WordPress, CSS, Javascript, HTML, PHP, My SQL, Java, etc. 
        for your business development. We aim to have a remarkable identity in the IT industry in Nepal. 
      </p>
      <p className="para3">Please give us your valuable feedback and suggestions. We appreciate your opinions and will use it to 
      evaluate changes and make improvements on our site.
      </p>
      {/* <div className="about">
    

      <h1 className="about-us">About Us</h1>
      <p className="para">Hello, Welcome to our about page. You will learn more about our company here.</p>
    
      <p className="para1">Prama Technology Pvt. Ltd. is an IT industry established in 2020, located in Kailali, Nepal. We are a company involved in the design,
         development, testing and maintenance of the system. Beside that we also provide the services for Digital Marketing, sales and 
         maintenance of the computer and their latest parts as well as networking related work of our clients.
      </p>
      <p className="para2">Trek bikes are very good. Trek has a long history of making quality
        bikes that are used by beginner, hobby, and elite cyclists around the
        world. Trek bikes last for a long time and have excellent reselling
        value years after purchase.
      </p>
      <br />

      <h3>Browse through some of our videos</h3>
      <br />
      <div className="videos">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MsBuNcEB-6Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DFRdZZYwljc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pfECwILwlrg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3pzKY6tqf9c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      </div> */}
    {/* <div style={{backgroundImage: 'url(../../images/bg.jpg)'}}>hi</div> */}
    </>
  );
}

export default About;
