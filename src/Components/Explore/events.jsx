import React, { Component } from "react";
import Navbar from "../Homepage/navbar";
import axios from "axios";
import Clock from "../../images/clock.jfif";

class Events extends Component {
    state = {
        events: [],
        status: false,
    };

    componentDidMount() {
        this.getEventDetails();
    }

    getEventDetails = () => {
        console.log(this.state.status);
        if (!this.state.status) {
            try {
                axios({
                    method: "get",
                    url: "http://localhost:5000/event",
                }).then(async (response) => {
                    if (response.data) {
                        await this.setState({
                            events: response.data,
                            status: true,
                        });
                        console.log(this.state.events, this.state.status);
                    }
                });
            } catch (e) {
                console.log(e);
            }
        }
    };

    render() {
        let { events } = this.state;
        return (
            <>
                <Navbar />
                <div className="content-body">
                    <div className="row page-titles mx-0">
                        <div className="col p-md-0">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    <a href="/">Home</a>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="padding">

                        <div className="container-fluid">



                            <div className="row">
                                {events.map((event, index) => (
                                    <div className="col-6" key={index}>
                                        <div className="card" style={{
                                            marginTop: "2%",

                                        }}>
                                            <div className="card-body" style={{
                                                padding: "2% 5%",

                                            }}>
                                                <a style={{ textDecoration: "none" }} href={event.eventLink}>
                                                    <h3 style={{
                                                        color: "rgb(252,82,134)",
                                                        fontWeight: "bold"

                                                    }}>{event.eventName}</h3>
                                                </a>

                                                <div className="row" style={{ marginTop: "20px" }}>
                                                    <div className="col-6">  <h5 className="p1">
                                                        by -
                                                        <a style={{
                                                            textDecoration: "none",
                                                            fontWeight: "600"
                                                        }} className="a2" href="https://vvgnli.gov.in/en/faculty/dr-manoj-jatav">
                                                            {event.staffName}{" "}
                                                        </a>
                                                    </h5></div>
                                                    <div className="col-1"><img style={{ marginTop: "6px" }} src={Clock} alt="" />

                                                    </div>
                                                    <div className="col-5">
                                                        <p className="p1" style={{
                                                            margin: "10px 0px",
                                                            fontWeight: "600"
                                                        }}>
                                                            {event.duration}
                                                        </p>
                                                    </div>
                                                </div>



                                                <p className="p1" style={{
                                                    marginTop: "20px",

                                                }}>
                                                    {event.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default Events;
