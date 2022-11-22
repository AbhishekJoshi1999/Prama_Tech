import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
// // npm i @emailjs/browser
// const StyledContactForm = styled.div`
// *{
//   align:centre
// }
//   width: 400px;
//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;
//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     label {
//       margin-top: 1rem;
//     }
//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;
const Contact = () => {
  const form = useRef();
  
  const contactConfig = {
    YOUR_EMAIL: 'pramatech2020@gmail.com',
    YOUR_PHONE: '+977-9825603526',
   
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_42en1yn",
        "template_10o8iso",
        form.current,
        "TT0GSmwt9-mSCtItO"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
<>
      <Row className="mb-5 mt-3">
<Col lg="8">
<h1 className="display-4 mb-4">Contact Us</h1>
<hr className="t_border my-4 ml-0 text-left" />
</Col>
</Row>
<Row className="sec_sp">
<Col lg="5" className="mb-5">
<h3 className="color_sec py-4">Get in Touch</h3>
<address>
  <strong>Email:</strong>{" "}
  <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
    {contactConfig.YOUR_EMAIL}
  </a>
  <br />
  <br />
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
<form  className="contact__form w-100">
  <Row>
    <Col lg="6" className="form-group">
      <input
        className="form-control"
        id="name"
        name="name"
        placeholder="Name" 
        type="text"
        required 
      />
    </Col>
    <Col lg="6" className="form-group">
      <input
        className="form-control rounded-0"
        id="mobile"
        name="mobile"
        placeholder="Mobile Number"
        type="email" 
        required 
      />
    </Col>
    <Col lg="6" className="form-group">
      <input
        className="form-control rounded-0"
        id="email"
        name="email"
        placeholder="Email"
        type="email" 
        required 
      />
    </Col>
  </Row>
  <textarea
    className="form-control rounded-0"
    id="message"
    name="message"
    placeholder="Message"
    rows="5" 
    required
  ></textarea>
  <br />
  <Row>
    <Col lg="12" className="form-group">
      <button className="btn btn-primary" type="submit" onClick={sendEmail}> 
      Send
      </button>
    </Col>
  </Row>
</form>
</Col>
</Row>
    </>
  );
};

export default Contact;

// import React from "react"; 
// import { Container, Row, Col } from "react-bootstrap";
// import { useRef,useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function Contact() {

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_42en1yn",
//         "template_10o8iso",
//         form.current,
//         "TT0GSmwt9-mSCtItO"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };
  
//   const [data,setUser]=useState({
//     name:"",email:"",mobile:"",message:""
    
//   })

// let name,value;
// const handleInput=(e)=>{
//   console.log(e);
//   name=e.target.name;
//   value=e.target.value;
//   setUser({...data,[name]:value})
//   console.log(data)
// }

  
//   const contactConfig = {
//     YOUR_EMAIL: 'pramatech2020@gmail.com',
//     YOUR_PHONE: '+977-9825603526',
   
//   };

//   return (
//       <Container>
     
//         <Row className="mb-5 mt-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4">Contact Us</h1>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <Row className="sec_sp">
//           <Col lg="5" className="mb-5">
//             <h3 className="color_sec py-4">Get in Touch</h3>
//             <address>
//               <strong>Email:</strong>{" "}
//               <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
//                 {contactConfig.YOUR_EMAIL}
//               </a>
//               <br />
//               <br />
//               {contactConfig.hasOwnProperty("YOUR_PHONE") ? (
//                 <p>
//                   <strong>Phone:</strong> {contactConfig.YOUR_PHONE}
//                 </p>
//               ) : (
//                 ""
//               )}
//             </address>
//             <p>{contactConfig.description}</p>
//           </Col>
//           <Col lg="7" className="d-flex align-items-center">
//             <form  className="contact__form w-100">
//               <Row>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     placeholder="Name" 
//                     type="text"
//                     required 
//                   />
//                 </Col>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control rounded-0"
//                     id="mobile"
//                     name="mobile"
//                     placeholder="Mobile Number"
//                     type="email" 
//                     required 
//                   />
//                 </Col>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control rounded-0"
//                     id="email"
//                     name="email"
//                     placeholder="Email"
//                     type="email" 
//                     required 
//                   />
//                 </Col>
//               </Row>
//               <textarea
//                 className="form-control rounded-0"
//                 id="message"
//                 name="message"
//                 placeholder="Message"
//                 rows="5" 
//                 required
//               ></textarea>
//               <br />
//               <Row>
//                 <Col lg="12" className="form-group">
//                   <button className="btn btn-primary" type="submit" onClick={sendEmail}> 
//                   Send
//                   </button>
//                 </Col>
//               </Row>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//   );
// }
