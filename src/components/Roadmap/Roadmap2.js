import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/activity";

class Activity extends Component {
    state = {
        data: {},
        tabData_1: [],
        tabData_2: [],
        tabData_3: [],
        filterData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    tabData_1: res.data.tabData_1,
                    tabData_2: res.data.tabData_2,
                    tabData_3: res.data.tabData_3,
                    filterData: res.data.filterData 
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section id="roadmap" className="activity-area load-more">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            
                        </div>
                        <div className="col-md-3">
                        <h3 className="text-roadmap text-center">25%</h3>
                            <p className="text-justify">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        </div>
                        <div className="col-md-3">
                        
                        </div>
                        <div className="col-md-3">
                        
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="text-roadmap text-center">25%</h3>
                            <p className="text-justify">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        </div>
                        <div className="col-md-3">
                        
                        </div>
                        <div className="col-md-3">
                        
                        </div>
                        <div className="col-md-3">
                        
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Activity;