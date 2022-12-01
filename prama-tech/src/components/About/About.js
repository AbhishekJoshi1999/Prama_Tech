// import React from "react";
// import "../About/About.css";
// // import Pic from '../../images/pic1.jpg'
// import code from '../../images/code.jpg'



// function About() {
//   return (
//     <>
//     <div className="Abt">
//           <h1 className="dis">Hello, Welcome to our about page. </h1>
//           <h2 className="head">You will learn more about our company here.</h2>
//         </div>
      
//           <p className="para1">Prama Technology Pvt. Ltd. is an IT industry established in 2020, located in Kailali, Nepal. We are a
//          company involved in the design, development, testing and maintenance of the system. Beside that we also provide the services
//          for Digital Marketing, sales and maintenance of the computer and their latest parts as well as networking related work of 
//          our clients.
//          <div className='col-lg-4 order-1 order-lg-2 header-img'>
//          <img src={code} width={100} height={100} className='img-fluid animated' alt="code" />
//          </div>
//       </p>
//       <p className="para2">We established this company to provide different services of Modern Technology for our clients. 
//         Tikapur area is still behind in digital technology compared to other cities of Nepal, so we are here to modernize 
//         this city and your business. We use modern technical tools such as WordPress, CSS, Javascript, HTML, PHP, My SQL, Java, etc. 
//         for your business development. We aim to have a remarkable identity in the IT industry in Nepal. 
//       </p>
//       <p className="para3">Please give us your valuable feedback and suggestions. We appreciate your opinions and will use it to 
//       evaluate changes and make improvements on our site.
//       </p>
//     </>
//   );
// }

// export default About;


import React from 'react'

const About = () => {
  return (
    <>
      <section className='about'>
        <div className='row'>
          <div className='column'>
            <div className='about-img'>

            </div>
          </div>
          <div className='column'>
                      
          </div>
          <div className='tab-content'>
            <div className='content'>
              <h2>Our History</h2>
              <p>Prama Technology Pvt. Ltd. is an IT industry established in 2020, located in Kailali, Nepal. We are a
          company involved in the design, development, testing and maintenance of the system. Beside that we also provide the services
          for Digital Marketing, sales and maintenance of the computer and their latest parts as well as networking related work of 
        our clients.</p>
        <h3>Our Aim and Working Tools</h3>
        <p>We established this company to provide different services of Modern Technology for our clients. 
         Tikapur area is still behind in digital technology compared to other cities of Nepal, so we are here to modernize 
         this city and your business. We use modern technical tools such as WordPress, CSS, Javascript, HTML, PHP, My SQL, Java, etc. 
         for your business development. We aim to have a remarkable identity in the IT industry in Nepal.</p>
            </div>
          </div>
          </div>
        
      </section>
    </>
  )
}

export default About
