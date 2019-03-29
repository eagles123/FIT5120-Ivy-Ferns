import React, { Component, useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Recommender from "./Components/layout/Recommender";
import DataDashBoard from "./Components/common/DataDashBoard";
import MainPage from "./Components/layout/MainPage";

const App = () => {
  // const [ids, setIds] = useReducer([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/dashboard" component={DataDashBoard} />
          <Route exact path="/recommend" component={Recommender} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
