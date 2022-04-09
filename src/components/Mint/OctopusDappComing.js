import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/activity";

class Activity extends Component {
    state = {
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center ">
                    <h1 className="color-primary"><a href="https://opensea.io/collection/fluid-octopus" target="__blank">CLICK AND BUY ON OPENSEA ;)</a></h1>
                  </div>
              </div>
            </div>
        );
    }
}

export default Activity;