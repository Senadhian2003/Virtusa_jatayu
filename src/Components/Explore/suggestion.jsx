import React, { Component } from "react";
import Navbar from "../Homepage/navbar";
import axios from "axios";

import "../../css/suggestion.css";


class SuggestForm extends Component {
    state = {  } 
    render() { 
        return (

            <>

            <Navbar/>
            <div className="padding">
            <h4 style={{fontWeight :"bold",
                        marginTop : "50px",
                        textAlign : "center",
                        color : "rgb(252,82,134)"
        }}>Training Programs requested by labours</h4>
                    <div class="container-fluid" style={{width : "80%"}} >
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="">
                                    <div class="card-body">
                                        <div class="card-title">
                                            
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table ">
                                                <thead>
                                                    <tr>
                                                        <th>S.NO</th>
                                                        <th>Event name</th>
                                                        <th>Count</th>
                                                    </tr>
                                                </thead>
                                                <tbody class ="table-hover">
                                                    {/* {this.state.eServices.map(
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
                                                    )} */}
                                                    <tr>
                                                                <th>
                                                                    1
                                                                </th>
                                                                <td>
                                                                    Industrial Safety 
                                                                </td>
                                                                <td>
                                                                   300
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    1
                                                                </th>
                                                                <td>
                                                                    Industrial Safety 
                                                                </td>
                                                                <td>
                                                                   300
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    1
                                                                </th>
                                                                <td>
                                                                    Industrial Safety 
                                                                </td>
                                                                <td>
                                                                   300
                                                                </td>
                                                            </tr>


                                                </tbody>
                                            </table>
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
 
export default SuggestForm;