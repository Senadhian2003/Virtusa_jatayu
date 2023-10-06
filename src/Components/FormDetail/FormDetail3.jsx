import React from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from 'react';
import "./form.css"
import Navbar from '../Homepage/navbar';
export default function FormDetail() {
    const navigate = useNavigate();
    const [mail,smail]=useState("");
    const [role,srole]=useState("");
    const [name,sname]=useState("");
    const [password,spassword]=useState("");
    function handlesubmit(e){
        e.preventDefault();
    }
     function submitdata(){
        
      axios.post("http://localhost:5000/signup",{
        name:name,
        mail:mail,
        role:role,
        password:password
      }
    ).then((response) => {
        // navigate("/")
        console.log(response.data)
    
        
    }).catch((msg)=>{
        //  navigate("/")
        console.log(msg);
    });

     }

  return (
    <div>
       <Navbar/>
  
    <div className="Auth-form-container">
        
    <form className="Auth-form regform3" onSubmit={handlesubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Medical Details</h3>
        <div className="form-group mt-3">
          <label>Pre-Existing Medical conditions</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Existing medical condition"
            onChange={(e)=>smail(e.target.value)}
            value={mail}
          />
        </div>
        <div className="form-group mt-3">
          <label>Current Medications</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Current medication"
            onChange={(e)=>sname(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group mt-3">
          <label>History of Surgeries or Hospitalizations</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="past medication"
            onChange={(e)=>sname(e.target.value)}
            value={name}
          />
        </div>
       
     
        
        
        <div className="form-group mt-3">
          <label>Family Medical History (Optional)</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Family medications"
          />
        </div>
    
    
 
         <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={()=>{navigate("/")}} style={{marginBottom:"10%"}}className="btn btn-primary">
             Submit
            </button> 
        
        </div>
      </div>
    </form>
  </div>
  </div>

        

   
  )
}
