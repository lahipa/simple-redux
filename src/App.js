import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import PeoplesPage from "./pages/peoples";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/peoples" component={PeoplesPage} />
      </Switch>
    </Router>
  );
};

export default App;
