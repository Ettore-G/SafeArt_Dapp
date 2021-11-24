import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Principal from "../themes/principal";
import Mint from "../themes/mint-your-nft";
import Roadmap from "../themes/roadmap";
import Coming from "../themes/coming";
import NotFound from "../themes/not-found";
import Test from "../themes/test";
import Test2 from "../themes/test2";



class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={Principal} /> decommentare questo il giorno del uscita */}
            <Route exact path="/" component={Coming} />
            {/* indirizzo che ci serve per vedere i nostri test */}
            <Route exact path="/safearttestdapp" component={Test} />
            <Route exact path="/safearttest2dapp" component={Test2} />
            <Route path="/mint-your-NFT" component={Mint} />
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