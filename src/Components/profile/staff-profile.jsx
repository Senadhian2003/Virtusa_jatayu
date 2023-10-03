import React, { Component } from "react";
import Navbar from "../Homepage/navbar";


class StaffProfile extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar />

            <div className="content-body">

                <div className="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="https://vvgnli.gov.in/sites/default/files/styles/faculty_grid/public/Profile%20picture.jpg?itok=suh__16v" class="rounded-circle" alt=""/>
                                    <h5 class="mt-3 mb-1">Dr. Manoj Jatav</h5>
                                    <p class="m-0">Senior Manager</p> 
                                     <a href="javascript:void()" class="btn btn-sm btn-warning">Send Message</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                    <a href="/explore/profile/profile">
                                    <img src="https://vvgnli.gov.in/sites/default/files/styles/faculty_grid/public/IMG_20190513_134237.jpg?itok=1twRjUEg" class="rounded-circle" alt=""/>
                                    <h5 class="mt-3 mb-1">Dr. Ramya Ranjan Patel</h5>
                                     <p class="m-0">Store Manager</p> 
                                     <a href="javascript:void()" class="btn btn-sm btn-warning">Send Message</a> </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="https://vvgnli.gov.in/sites/default/files/styles/faculty_grid/public/Untitled_0.jpg?itok=bl-8StbH" class="rounded-circle" alt=""/>
                                    <h5 class="mt-3 mb-1">Mr. Priyadarsan Amitav Khuntia</h5>
                                     <p class="m-0">Sales Man</p>
                                     <a href="javascript:void()" class="btn btn-sm btn-warning">Send Message</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="https://vvgnli.gov.in/sites/default/files/styles/faculty_grid/public/IMG-20211028-WA0003.jpg?itok=OngLmAJr" class="rounded-circle" alt=""/>
                                    <h5 class="mt-3 mb-1">Dr. Dhanya M B</h5>
                                     <p class="m-0">Online Marketer</p> 
                                     <a href="javascript:void()" class="btn btn-sm btn-warning">Send Message</a> 
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            
                </div>

            </div>
            
            </>


        );
    }
}
 
export default StaffProfile;