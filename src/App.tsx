import { Mains } from "../src/pages/Mains";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTER from "./constants/routes";
import Home from "./pages/Home";


const App = () => {
  return (
    <div style={{ backgroundColor: "#080707", color: "#E5E5E5" }}>
      <Router>
        <Switch>
          <Route exact path={ROUTER.HOME} component={Home} />
        </Switch>
        <Switch>
          <Route path={ROUTER.MAIN} component={Mains} />
        </Switch>
      </Router>
     
    </div>
  );
};

export default App;
