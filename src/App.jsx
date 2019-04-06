import React, { useReducer } from "react";
import { Switch, Route, __RouterContext, Redirect } from "react-router-dom";
import "./App.css";
import Recommender from "./Components/layout/Recommender";
import DataDashBoard from "./Components/common/DataDashBoard";
import HomePage from "./Components/layout/HomePage";
import Intro from "./Components/layout/Intro";
import { choiceReducer } from "./Components/reducer/choiceReducer";
import { ChoiceContext } from "./Components/context/ParameterContext";
import About from "./Components/layout/About";
import { Fade } from "react-reveal";
import FAQs from "./Components/layout/FAQs";
import NotFound from "./Components/layout/NotFound";

const App = () => {
  const [choice, choiceDispatch] = useReducer(choiceReducer, {
    healthField: false,
    educationField: false,
    propertyField: false,
    jobField: false
  });

  return (
    <div className="App">
      <Fade top duration={1500} />
      <ChoiceContext.Provider value={{ choiceDispatch, choice }}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/recommend" component={Recommender} />
          <Route path="/dashboard" component={DataDashBoard} />
          <Route path="/intro" component={Intro} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/not-found" />
        </Switch>
      </ChoiceContext.Provider>
    </div>
  );
};

export default App;
