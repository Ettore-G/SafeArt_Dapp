import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// importing all the themes
import ThemeOne from "../themes/theme-one";
import ExploreThree from "../themes/explore-three";
import Activity from "../themes/activity";
import Blog from "../themes/blog";
import BlogSingle from "../themes/blog-single";
import Login from "../themes/login";
import Signup from "../themes/signup";
import Contact from "../themes/contact";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ThemeOne} />
            <Route exact path="/mint-your-NFT" component={ExploreThree} />
            <Route exact path="/roadmap" component={Activity} />
            {/* <Route exact path="/news" component={Blog} /> */}
            {/* <Route exact path="/blog-single" component={BlogSingle} /> */}
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} /> */}
            {/* <Route exact path="/contact" component={Contact} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;