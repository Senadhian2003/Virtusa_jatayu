import React, { Component } from "react";
import Navbar from "../Homepage/navbar";
import Clock from "../../images/clock.jfif";

class EventDetail  extends Component {
    state = {
        events: [],
    };

    componentDidMount() {
        this.setState({events: this.props.events})
        console.log("DAV",this.state.events, this)
    }

    render() {
        // let { events } = this.state;
        // console.log("ASCASDC",  events)
        return (
            <>
                <Navbar />
                <div className="content-body">
                    

                    <div className="padding">

                    <div className="container-fluid">
                        <div className="row">
                            {/* {events.map((event, index) => (
                                <div className="col-12" key={index}>
                                    <div className="card" style={{marginTop : "2%",
                                                                
                                        }}>
                                        <div className="card-body" style={{
                                            padding : "2% 5%",
                                            
                                        }}>
                                            <a href={event.eventLink}>
                                                {event.eventName}
                                            </a>
                                            <p className="p1">
                                                Taken by -{" "}
                                                <a className="a2" href="">
                                                    {event.staffName}{" "}
                                                </a>
                                            </p>
                                            <p className="p1">
                                                {event.duration}
                                            </p>
                                            <p className="p1">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))} */}

                                <div className="col-6" >
                                    <div className="card" style={{marginTop : "2%",
                                                                
                                        }}>
                                        <div className="card-body" style={{
                                            padding : "2% 5%",
                                            
                                        }}>
                                            <a style={{textDecoration : "none"}} href="https://vvgnli.gov.in/en/course/capacity-building-programme-labour-codes-and-rules-0">
                                           <h3 style={{color : "rgb(252,82,134)",
                                                        fontWeight : "bold"
                                                        
                                                    }}>Capacity Building Programme on Labour Codes and Rules</h3> 
                                            </a>
                                          
                                            <div className="row" style={{marginTop:"20px"}}>
                                                <div className="col-6">  <h5 className="p1">
                                                by - 
                                                <a style={{textDecoration:"none",
                                                            fontWeight : "600"
                                            }} className="a2" href="https://vvgnli.gov.in/en/faculty/dr-manoj-jatav">
                                                 Dr. Manoj Jatav
                                                </a>
                                            </h5></div>
                                            <div className="col-1"><img style={{marginTop:"6px"}} src={Clock} alt="" />

</div>
<div className="col-5">
<p className="p1" style={{margin:"10px 0px",
                            fontWeight : "600"
}}>
                                            27/06/2022  -  01/07/2022
                                            </p>
</div>
                                            </div>
                                            
                                            
                                            
                                            <p className="p1" style={{marginTop : "20px",
                                                                    
                                        }}>
                                            The programme aims at enhancing the understanding of the participants on the process of labour reforms in India. It would orient the participants to have an understanding on the key features of various labour codes.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-6" >
                                    <div className="card" style={{marginTop : "2%",
                                                                
                                        }}>
                                        <div className="card-body" style={{
                                            padding : "2% 5%",
                                            
                                        }}>
                                            <a href="https://vvgnli.gov.in/en/course/capacity-building-programme-labour-codes-and-rules-0">
                                            Capacity Building Programme on Labour Codes and Rules
                                            </a>
                                            <p className="p1">
                                                Taken by -
                                                <a className="a2" href="https://vvgnli.gov.in/en/faculty/dr-manoj-jatav">
                                                Dr. Manoj Jatav
                                                </a>
                                            </p>
                                            <p className="p1">
                                            27/06/2022 to 01/07/2022
                                            </p>
                                            <p className="p1">
                                            The programme aims at enhancing the understanding of the participants on the process of labour reforms in India. It would orient the participants to have an understanding on the key features of various labour codes.
                                            </p>
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

export default EventDetail;
