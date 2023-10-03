import React, { Component } from "react";
import Navbar from "../Homepage/navbar";
import axios from "axios";

class ArticleInfo extends Component {
    state = {
        articleDetails: [],
        status: false,
    };

    componentDidMount() {
        this.getArticleDetails();
    }

    getArticleDetails = () => {
        console.log(this.state.status, window.location.href.split('/')[4]);
        console.log("VDS")
        if (!this.state.status) {
            try {
                axios({
                    method: "get",
                    url: "http://localhost:5000/getArticles",
                    params: {
                        articleName: window.location.href.split('/')[4]
                    }
                }).then(async (response) => {
                    console.log("ADVD",response.data)
                    if (response.data) {
                        
                        await this.setState({
                            articleDetails: response.data,
                            status: true,
                        });
                        console.log(this.state.articleDetails, this.state.status);
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

                <div class="content-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card" style={{margin:"50px"}}>
                                    <div class="card-body" >
                                        <div class="card-title" style = {{color: "rgb(252,82,134)"}}>
                                            <h4 >Article: {window.location.href.split('/')[4].replaceAll("%20", " ")}</h4>
                                        </div>
                                        <div class="table-responsive" >
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>S.NO</th>
                                                        <th>Act and Rules</th>
                                                        <th>Download</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.articleDetails.map(
                                                        (article, index) => (
                                                            <tr>
                                                                <th>
                                                                    {index + 1}
                                                                </th>
                                                                <td>
                                                                    {
                                                                        article.description
                                                                    }
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        href={
                                                                            article.link
                                                                        }
                                                                    >
                                                                        pdf
                                                                    </a>
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
            </>
        );
    }
}

export default ArticleInfo;
