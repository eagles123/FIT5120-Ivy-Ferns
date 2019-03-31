import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Recommender from "./Components/layout/Recommender";
import DataDashBoard from "./Components/common/DataDashBoard";
import HomePage from "./Components/layout/HomePage";
import { PoseGroup } from "react-pose";
import RouteContainer from "./Components/common/RouteContainer";
import SimpleMatch from "./Components/layout/SimpleMatch";
import NavBar from "./Components/layout/NavBar";

const App = () => {
  // const [ids, setIds] = useReducer([]);
  return (
    <BrowserRouter>
      <PoseGroup>
        <RouteContainer key={Math.random()}>
          <Switch>
            <Route exact path="/dashboard" component={DataDashBoard} />
            <Route exact path="/recommend" component={Recommender} />
            <Route exact path="/match" component={SimpleMatch} />
            <Route path="/" component={HomePage} />
          </Switch>
        </RouteContainer>
      </PoseGroup>
    </BrowserRouter>
  );
};

export default App;
