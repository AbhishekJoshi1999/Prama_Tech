import React, { useState } from "react";
import "../../App.css";

export default function Contact() {
  
  
    const [data,setUser]=useState({
      name:"",email:"",mobile:"",message:""
      
    })
  
  let name,value;
  const handleInput=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...data,[name]:value})
    console.log(data)
  }
  

  return (
    
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleInput}>
              <div>
                {" "}
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={handleInput}
                  id="fullName"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                {" "}
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobile"
                  className="form-control"
                  onChange={handleInput}
                  id="mobile"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                {" "}
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleInput}
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  onChange={handleInput}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit" onClick={Contact}>
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
