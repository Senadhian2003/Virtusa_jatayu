import React, { Component } from "react";
import Navbar from "./navbar";
import InfoScrapMain from "../../images/InfoScrapMain.svg";
import Question from "../../images/Questions.svg";
import Interaction from "../../images/interaction.svg";
import RecentInfo from "../../images/recentInfo.svg";
import Events from "../../images/event.svg";
import InstituteSignup from "../../images/InstituteSignup.svg";
import Suggest from "../../images/suggest.svg";
import Footer from "./footer";
import "../../css/homepage.css";
import axios from "axios";
import {  Link, Navigate } from "react-router-dom";

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
                            <h1 className="heading">InfoScrap</h1>
                            <h3 className="tagline">
                                Your one stop site for gathering all the
                                knowledege and to know about how things are
                                running across various institutions.
                            </h3>
                        </div>
                        <div className="col">
                            <img
                                style={{ height: "550px" }}
                                src={InfoScrapMain}
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
                            style={{ height: "550px" }}
                            src={Question}
                            alt="img2" 
                        />
                    </div>
                    <div className="col-6">
                        <h3 className="title">Don't know what you want?</h3>
                        <p className="description">
                            Just enter the words which you want to view details
                            upon?
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
                                backgroundColor: "#FC5286",
                                borderColor: "#FC5286",
                            }}
                            onClick = {this.searchQuery}
                            type="submit"
                            value="Search"
                        />
                    </div>
                </div>

                <div
                    className="row d-flex justify-content-center align-items-center"
                    style={{
                        background: "#33325A",
                        paddingLeft: "5%",
                        paddingRight: "5%"
                    }}
                >
                    <div className="col">
                        <h3 className="title" style={{ color: "#F0FFFF" }}>
                            Get ready to Learn
                        </h3>
                        <p className="description" style={{ color: "#FFFFFF" }}>
                            Mark your clock to attend new upcoming training sessions and gain knowledege.
                        </p>
                        <a href="/events">
                            <input
                                class="btn btn-primary"
                                style={{
                                    margin: "20px",
                                    marginLeft: "50px",
                                    backgroundColor: "#FC5286",
                                    borderColor: "#FC5286",

                                }}
                                type="submit"
                                value="Explore events"
                            />
                        </a>

                    </div>
                    <div className="col">
                        <img
                            style={{ height: "490px" }}
                            src={Events}
                            alt="img2"
                        />
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
                        <h3 className="title">Interaction Portal</h3>
                        <p className="description">
                            A common place for every users to interact with each other and share their knowledege regarding labour related information.
                        </p>
                        <input
                            class="btn btn-primary"
                            style={{
                                margin: "20px",
                                marginLeft: "50px",
                                backgroundColor: "#FC5286",
                                borderColor: "#FC5286",
                            }}
                            type="submit"
                            value="Interact"
                        />
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
                        <h3 className="title">
                            Get recent information
                        </h3>
                        <p className="description">
                            Get updated information on recent news and media gallery.
                        </p>
                        <input
                            class="btn btn-primary"
                            style={{
                                margin: "20px",
                                marginLeft: "50px",
                                backgroundColor: "#FC5286",
                                borderColor: "#FC5286",
                            }}
                            type="submit"
                            value="Get news"
                        />
                    </div>
                    <div className="col">
                        <img
                            style={{ height: "550px" }}
                            src={RecentInfo}
                            alt="img2"
                        />

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
                            src={InstituteSignup}
                            alt="img2"
                        />
                    </div>
                    <div className="col">
                        <h3 className="title">Register your Organization</h3>
                        <p className="description">
                            Want more people to know about events conducted by your Institute? <br /><br />
                            Register in our portal and release dates and venue of events in our website
                        </p>
                        <a href="/register">
                        <input
                            class="btn btn-primary"
                            style={{
                                margin: "20px",
                                marginLeft: "50px",
                                backgroundColor: "#FC5286",
                                borderColor: "#FC5286",
                            }}
                            type="submit"
                            value="Register"
                        />
                        </a>
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
                        <h3 className="title">
                            Couldnt find what you are looking for?
                        </h3>
                        <p className="description d1">
                            Suggest institutions what you need.
                        </p>
                        <select class="form-select" value="def" id="title" aria-label="Default select example" style={{ width: "400px", marginLeft: "70px",marginTop:"20px" }}>
                            <option selected>Event</option>
                            <option value="1">Capacity Building Programme on Labour Codes and Rules</option>
                            <option value="2">Training Programme on Gender and Labour Issues</option>
                            <option value="3">Training Programme on Fundamentals of Labour Codes</option>
                            <option>Other...</option>
                        </select>
                        <div className="sh"></div>

                        <textarea name="" id="description" placeholder="Description..." value="d" cols="30" rows="6" style={{ width: "400px", marginLeft: "70px",marginTop:"20px" }}></textarea>
                        <br />
                        <a href="explore/suggest_form">
                            <input
                                class="btn btn-primary"
                                style={{
                                    margin: "20px",
                                    marginLeft: "70px",
                                    backgroundColor: "#FC5286",
                                    borderColor: "#FC5286",
                                }}
                                onClick={this.suggest}
                                type="submit"
                                value="Suggest"
                            />
                        </a>

                    </div>
                    <div className="col">
                        <img
                            style={{ height: "550px" }}
                            src={Suggest}
                            alt="img2"
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
