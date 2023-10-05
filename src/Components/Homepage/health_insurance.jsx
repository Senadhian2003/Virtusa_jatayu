import React, { Component } from "react";
import Navbar from "./navbar";
import  "../../css/health_insurance.css";
class Health_insure extends Component
{
state={}
render(){
    return(
        
    <div >
    <Navbar/>

    <div className="Cus_form container">
    <form className="row g-3 needs-validation" noValidate>
        <div className="position-relative">
          <label htmlFor="validationTooltip01" className="form-label">First name</label>
          <input type="text" className="form-control" id="validationTooltip01" style={{width:"50%"}} required />
          <div className="valid-tooltip">
            Looks good!
          </div>
        </div>
        <div className=" position-relative">
          <label htmlFor="validationTooltip02" className="form-label">Last name</label>
          <input type="text" className="form-control" id="validationTooltip02"style={{width:"50%"}}  required />
          <div className="valid-tooltip">
            Looks good!
          </div>
        </div>
        <div className=" position-relative">
          <label htmlFor="validationTooltipUsername" className="form-label">Age</label>
          <input type="text" className="form-control"style={{width:"50%"}} id="validationTooltip03" required />
        </div>
        <div className="position-relative">
          <label htmlFor="validationTooltip03" className="form-label">City</label>
          <input type="text" className="form-control"style={{width:"50%"}} id="validationTooltip03" required />
          <div className="invalid-tooltip">
            Please provide a valid city.
          </div>
        </div>
        <div className="position-relative">
          <label htmlFor="validationTooltip04" className="form-label">State</label>
          <select className="form-select" id="validationTooltip04" style={{width:"50%"}} required>
            <option selected disabled value>Choose...</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
          </select>
          <div className="invalid-tooltip">
            Please select a valid state.
          </div>
        </div>
        <div className="col-md-3 position-relative">
          <label htmlFor="validationTooltip05" className="form-label">Zip</label>
          <input type="text" className="form-control" id="validationTooltip05" required />
          <div className="invalid-tooltip">
            Please provide a valid zip.
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
      </div>
      </div>
      );
}
}





export default Health_insure;