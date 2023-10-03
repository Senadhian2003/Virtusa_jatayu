import React, { Component } from "react";
import Navbar from "../Homepage/navbar";
import axios from "axios";

class EServices extends Component {
    state = {
        eServices: [],
        status: false,
    };

    componentDidMount() {
        this.getEServiceDetails();
    }

    getEServiceDetails = () => {
        console.log(this.state.status);
        if (!this.state.status) {
            try {
                axios({
                    method: "get",
                    url: "http://localhost:5000/eService",
                }).then(async (response) => {
                    if (response.data) {
                        console.log("RESSSPONSSEEE", response);
                        await this.setState({
                            eServices: response.data,
                            status: true,
                        });
                        console.log(this.state.eServices, this.state.status);
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

                    
                    <div className="padding">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="">
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h4>E-services</h4>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>S.NO</th>
                                                        <th>Services</th>
                                                        <th>Authorization</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.eServices.map(
                                                        (eService, index) => (
                                                            <tr>
                                                                <th>
                                                                    {index + 1}
                                                                </th>
                                                                <td>
                                                                    {
                                                                        eService.serviceHeading
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        eService.paragraph
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
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

export default EServices;
