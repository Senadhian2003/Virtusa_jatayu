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
        
    <form className="Auth-form regform2" onSubmit={handlesubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Family Detail</h3>
        <div className="form-group mt-3">
          <label>Total Family members</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="Family member count"
            onChange={(e)=>smail(e.target.value)}
            value={mail}
          />
        </div>
        <div className="form-group mt-3">
          <label>Number of children</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="Child count"
            onChange={(e)=>sname(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group mt-3">
          <label>Disease Percent</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="Enter in percent"
            onChange={(e)=>sname(e.target.value)}
            value={name}
          />
        </div>
       
     
        
        
        <div className="form-group mt-3">
          <label>Aged people count</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="Aged people count"
          />
        </div>
    
        <div className="form-group mt-3">
          <label>Family member with genetic disorder count</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="Genetic disorder count"
          />
        </div>
    
 
        <div className="form-group mt-3">
          <label>Corelation of 4 column</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="Corelation"
          />
        </div>
    
 
         <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={()=>{navigate("/form3")}} style={{marginBottom:"10%"}}className="btn btn-primary">
             Next
            </button> 
        
        </div>
      </div>
    </form>
  </div>
  </div>

        

   
  )
}
