import React, { Component } from "react";
import Navbar from "../Homepage/navbar";
import axios from "axios";
class Media extends Component {
    state = {
        images :[],
        videos : [],
        status : false,
        status1 : false,

    };
    componentDidMount() {
        this.getMediaDetails();
    }

    getMediaDetails = () => {
        console.log(this.state.status);
        if (!this.state.status) {
            try {
                axios({
                    method: "get",
                    url: "http://localhost:5000/mediaImage",
                }).then(async (response) => {
                    if (response.data) {
                        await this.setState({
                            images: response.data,
                            status: true,
                        });
                        console.log(this.state.images, this.state.status);
                    }
                });


                axios({
                    method: "get",
                    url: "http://localhost:5000/mediaVideo",
                }).then(async (response) => {
                    if (response.data) {
                        await this.setState({
                            videos: response.data,
                            status1: true,
                        });
                        console.log(this.state.videos, this.state.status1);
                    }
                });


            } catch (e) {
                console.log(e);
            }
        }
    };
    
    render() {
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

                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h3> VIDEO REFERENCES </h3>
                                        <br />
                                        <br />

                                        {this.state.videos.map((video,index)=>(
                                            <ol>
                                            <li key={index}>
                                                {video.heading}
                                            </li>
                                            <br />
                                            <iframe
                                                style={{ marginLeft: "15%" }}
                                                width="300"
                                                height="200"
                                                src={video.link}
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen
                                            ></iframe>
                                            
                                        </ol>

                                        ))}
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h3> IMAGE REFERENCES </h3>
                                        <br />
                                        <br />
                                        
                                            {this.state.images.map((image,index)=>(
                                                <ul>
                                                <a href={image.Link}>
                                                <li key={index}>
                                                {image.Topic}
                                            </li>

                                                </a>
                                            <br />
                                            <img
                                                typeof="foaf:Image"
                                                src={image.ImageLink}
                                                style={{ marginLeft: "15%" }}
                                                width="300"
                                                height="200"
                                                alt=""
                                            />
                                             </ul>
                                   ))}
                                   
                                    
                                            
                                            
                                            
                                        
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

export default Media;
