import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
// importing all the themes
import ThemeOne from "../themes/theme-one";
import ExploreThree from "../themes/explore-three";
import Activity from "../themes/activity";
import Coming from "../themes/coming";



class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={ThemeOne} /> */}
            <Route exact path="/" component={Coming} />
            <Route path="/mint-your-NFT" component={ExploreThree} />
            <Route path="/roadmap" component={Activity} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;