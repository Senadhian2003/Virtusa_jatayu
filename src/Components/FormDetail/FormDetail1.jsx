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
        
    <form className="Auth-form regform1" onSubmit={handlesubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Self details</h3>
        <div className="form-group mt-3">
          <label>Age</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Age"
            onChange={(e)=>smail(e.target.value)}
            value={mail}
          />
        </div>
        <div className="form-group mt-3">
          <label>Height</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="Height"
            onChange={(e)=>sname(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group mt-3">
          <label>Weight</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="weight"
            onChange={(e)=>sname(e.target.value)}
            value={name}
          />
        </div>
        <h3 className="Auth-form-title">Employment details</h3>
     
        
        
        <div className="form-group mt-3">
          <label> Years at current company</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="years at company"
          />
        </div>
    
        <div className="form-group mt-3">
          <label> Number of job changes</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="Total switches"
          />
        </div>
    
 
        <div className="form-group mt-3">
          <label> Side business transitions</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="Alternate buisness"
          />
        </div>
    
 
         <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={()=>{navigate("/form2")}} style={{marginBottom:"10%"}}className="btn btn-primary">
             Next
            </button> 
        
        </div>
      </div>
    </form>
  </div>
  </div>

        

   
  )
}
