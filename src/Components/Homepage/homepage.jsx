import React, { Component } from "react";
import Navbar from "./navbar";
import TopImg from "../../images/AutoInsure.png";
import Middle_Img from "../../images/Middle_Img.jpg";
import Interaction from "../../images/Interaction.jpg";
import disability from "../../images/dis.jpg";
import carInsure from "../../images/car-insurance-and-money-vector.jpg";
import health from "../../images/Health.jpg";
import Health_insure from "./health_insurance";
import Footer from "./footer";
import "../../css/homepage.css";
import axios from "axios";
import {  Link, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";

class Homepage extends Component {
    state = {
        searchStatus: false,
        searchedEvents:[]
    };

    suggest = () => {
        var title = document.getElementById("title").value;
        var description = document.getElementById("description").value;

        try {
            axios({
                method: "get",
                url: "http://localhost:5000/suggestion",
                params: {
                    title: title,
                    description: description
                }
            }).then(async (response) => {
                if (response.data) {
                    await this.setState({
                        events: response.data,
                        status: true,
                    });
                    console.log(this.state.events, this.state.status);
                }
            });
        } catch(e) {
            console.log(e)
        }

    }

    record() {
        var recognition = new window.webkitSpeechRecognition();
        recognition.lang = "en-GB";

        recognition.onresult = function(event) {
            // console.log(event);
            document.getElementById('searchQuery').value = event.results[0][0].transcript;
        }
        recognition.start();

    }

    searchQuery = () => {
        console.log("HELLS")
        console.log(document.getElementById("searchQuery").value);
        try {
            axios({
                method: "get",
                url: "http://localhost:5000/nlpQuery",
                params: {
                    userQuery: document.getElementById("searchQuery").value
                }
            }).then(async (response) => {
                    await this.setState({
                        searchedEvents: response.data,
                        searchStatus: true,
                    });
                    console.log("bdbdfberS",this.state.searchedEvents, this.state.searchStatus);
            });
        } catch(e) {
            console.log(e)
        }
    }

    render() {
        console.log("JHECA", this.state.searchStatus, this.state.searchedEvents)
        if(this.state.searchStatus) {
            return (
                <Navigate 
                    to={{
                        pathname: "/searchQuery",
                        state: {
                            searchEvents: this.state.searchedEvents,
                            name:"TASDVD"
                        },
                    }}
                />
            )
        }
        else{ 
        return (
            <div>
                <Navbar />
                <div className="row g-3">
                    <div className=" row d-flex justify-content-center align-items-center">
                        <div className="col">
                            <h1 className="heading">AutoInsure</h1>
                            <h3 className="tagline">
                            Step into a World of Limitless Coverage Possibilities: Your Metaverse Insurance Hub! Get ready to embark on a journey
                             like no other, where your insurance experience is redefined. Unleash your imagination, explore our metaverse,
                              and sculpt the perfect insurance for your unique needs. Welcome to the revolution in coverage your adventure starts here!
                            </h3>
                        </div>
                        <div className="col">
                            <img
                                style={{ height: "450px" ,margin:"50px"}}
                                src={TopImg}
                                alt="abc"
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="row d-flex justify-content-center align-items-center"
                    style={{
                        borderTop: "1px solid grey",
                        paddingLeft: "5%",
                        paddingRight: "5%"
                    }}
                >
                    <div className="col-6">
                        <img
                            style={{ height: "550px",width:"550px",margin:"20px"}}
                            src={Middle_Img}
                            alt="img2" 
                        />
                    </div>
                    <div className="col-6">
                        <h3 className="title">About insurance?</h3>
                        <p className="description">
                        Insurance is the vigilant guardian of financial peace of mind,
                        a contractual promise that transforms uncertainty into stability,
                        and a shield that embraces you in times of unexpected adversity,
                        offering a dependable refuge for your assets and aspirations.
                        </p>
                        <div style={{display: "flex", position:"relative"}}>
                        <input
                            type="text"
                            class="form-control description"
                            id="searchQuery"
                            aria-describedby="emailHelp"
                            placeholder="Enter Query"
                            style={{ width: "750px" }}
                        />
                        <i class="fa fa-microphone mb" style={{height: "40px", width: "50px", position:"absolute top"}} onClick={this.record}></i>
                        </div>
                        <input
                            class="btn btn-primary"
                            style={{
                                margin: "20px",
                                marginLeft: "50px",
                                backgroundColor: "#01a89e",
                                borderColor: "#01a89e",
                            }}
                            onClick = {this.searchQuery}
                            type="submit"
                            value="Search"
                        />
                    </div>
                </div>

                <div
                    
                    style={{
                        background: "#01a89e",
                        paddingLeft: "5%",
                        paddingRight: "5%"
                    }}
                >
                    <div>
                        <h3 className="title" style={{ color: "#F0FFFF",
                   paddingTop:"5%",textAlign:"center"}}>
                           Types of Insurace
                        </h3>
                  

                    </div>
                    <div >
                        {/* <img
                            style={{ height: "490px" }}
                            src={Events}
                            alt="img2"
                        /> */}
                        <div className='rcont'>
               <div className='tstcard'>
                  <img src={health} alt="noimg" className='rimg1' />
                  <p className='rp1'>Health Insurance</p>
                  <p className='rp2'>Health insurance provides financial protection and access to medical services,
                   helping individuals cover the costs of healthcare expenses</p>
                  <Link to="/Health_insure">
                     <Button variant="primary" className='rb1'> Apply </Button>
                  </Link>
               </div>
               <div className='tstcard'>
                  <img src={carInsure} alt="noimg" className='rimg1' />
                  <p className='rp1'>Car Insurance</p>
                  <p className='rp2'>Car insurance offers financial protection in case of accidents, theft, or damage to your vehicle,
                  ensuring peace of mind and compliance with legal requirements.</p>
                  <Link to="/student/acadamicscard/feedbackcard/report">
                     <Button variant="primary" className='rb1'> Apply </Button>
                  </Link>

               </div>
               <div className='tstcard'>
                  <img src={disability} alt="noimg" className='rimg1' />
                  <p className='rp1'>Disability Insurance</p>
                  <p className='rp2'>Disability insurance provides financial protection by replacing a 
                  portion of your income if you become unable to work due to a disabling injury or illness.
                  </p>
                  <Link to="/student/acadamicscard/feedbackcard/report">
                     <Button variant="primary" className='rb1'> Apply </Button>
                  </Link>

                </div>
                    </div>
                </div>
                </div>

                <div
                    className="row d-flex justify-content-center align-items-center"
                    style={{
                        borderTop: "1px solid grey",
                        paddingLeft: "5%",
                        paddingRight: "5%"
                    }}
                >
                    <div className="col">
                        <img
                            style={{ height: "550px" }}
                            src={Interaction}
                            alt="img2"
                        />
                    </div>
                    <div className="col">
                        <h3 className="title">Metaverse Interaction Portal</h3>
                        <p className="description">
                            A common place for every users to interact with the Insurance agent to clarify their doubts and Enroll in the insurace policy or for the claim.
                        </p>
                        <input
                            class="btn btn-primary"
                            style={{
                                margin: "20px",
                                marginLeft: "50px",
                                backgroundColor: "#01a89e",
                                borderColor: "#01a89e",
                            }}
                            type="submit"
                            value="Interact"
                        />
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
}

export default Homepage;
