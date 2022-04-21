import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OcstopusDapp from "../themes/octopusDapp";
import Leo3dDapp from "../themes/leo3dDapp";
import NotFound from "../themes/not-found";
import Home from "../themes/home";
import Work from "../themes/workwithus";



class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/octopusDapp" component={OcstopusDapp} />
            <Route path="/workwithus" component={Work} /> */}
            <Route path="/leo3dDapp" component={Leo3dDapp} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;