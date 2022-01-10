import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Principal from "../themes/principal";
import OcstopusDapp from "../themes/octopusDapp";
import SafeArtClub from "../themes/safeartclub";
import Roadmap from "../themes/roadmap";
import Coming from "../themes/coming";
import NotFound from "../themes/not-found";
import Home from "../themes/test";
import Test2 from "../themes/test2";



class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/safearttestdapp" component={Coming} />
            {/* <Route exact path="/safearttest2dapp" component={Test2} /> */}
            <Route path="/octopusDapp" component={OcstopusDapp} />
            <Route path="/safeartclub" component={SafeArtClub} />
            <Route path="/roadmap" component={Roadmap} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;