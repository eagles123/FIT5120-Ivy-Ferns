import React, { Component, useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/layout/NavBar";
import Recommender from "./Components/common/Recommender";

const App = () => {
  // const [ids, setIds] = useReducer([]);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Recommender} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
