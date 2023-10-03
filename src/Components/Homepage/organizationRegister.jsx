import React, { Component } from 'react';
import "../../css/organization.css";
import register from "../../images/register.svg"
import Footer from './footer';
import Navbar from './navbar';

class OrganizationRegister extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar/>
                <div class="page-content">
		<div class="form-v4-content">
			<div class="form-left">
				<h2>WELCOME TO INFOSCRAP</h2>
				<div class="img">
					<img src={register}/>
				</div>
				
				
			</div>
			<form class="form-detail" action="#" method="post" id="myform">
				<h2>CREATE YOUR ACCOUNT</h2>
				<div class="form-row">
					<label for="instituteName">Institute Name</label>
					<input type="text" name="instituteName" id="instituteName" class="input-text"/>
				</div>
				<div class="form-row">
					<label for="location">State</label>
					<input type="text" name="location" id="location" class="input-text"/>
				</div>
				<div class="form-row">
					<label for="your_email">Institute Email Id</label>
					<input type="text" name="your_email" id="your_email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
				</div>
				<div class="form-row">
					<label for="password">Password</label>
					<input type="password" name="password" id="password" class="input-text" required/>
				</div>
				<div class="form-row-last">
					<input type="submit" name="register" class="register" value="Register"/>
				</div>
			</form>
		</div>
	</div>
            </>
        );
    }
}
 
export default OrganizationRegister;