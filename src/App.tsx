import React from "react";
import { Mains } from "../src/pages/Mains";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTER from "./constants/routes";
import SignUp from "./pages/SIgnUp";
import WrongPage from "./pages/WrongPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <div style={{ backgroundColor: "#080707", color: "#E5E5E5" }}>
      <Router>
        <Switch>
          <Route exact path={ROUTER.HOME} component={Home} />
          <Route exact path={ROUTER.SIGN_IN} component={SignUp} />
          <Route path={ROUTER.MAIN} component={Mains} />
          <Route path={ROUTER.WRONG} component={WrongPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
