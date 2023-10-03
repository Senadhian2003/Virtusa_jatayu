import React, { Component } from 'react';
import axios from "axios"
import Navbar from '../Homepage/navbar';

class Articles extends Component {
    state = { 
        articles: []
     } 

    componentDidMount() {
        this.getArticlesList();
    }

    getArticlesList = () => {
        try {
            axios({
                method: "get",
                url: "http://localhost:5000/getArticlesList",
            }).then(async (response) => {
                if (response.data) {
                    console.log("RESSSPONSSEEE", response);
                    await this.setState({
                        articles: response.data,
                    });
                }
            });
        } catch (e) {
            console.log(e);
        }
    };

    render() { 
        return (
            <div>
                <Navbar/>
                <div className="padding">
                <div class="row" style={{margin:"30px"}}>
                {this.state.articles.map((article, index) => (
                    <div class="col-sm-3" >
                            <div class="card" style={{marginBottom:"30px",
                                               
                            }}>
                            <div class="card-body">
                                <h5 class="card-title">{article.articleName}</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href={"/articles/"+article.articleName} class="btn btn-primary" style = {{backgroundColor: "rgb(252,82,134)", borderColor: "rgb(252,82,134)"}}>Refer</a>
                            </div>
                            </div>
                    </div>
                ))}
                </div>
                </div>
                
            </div>
        );
    }
}
 
export default Articles;