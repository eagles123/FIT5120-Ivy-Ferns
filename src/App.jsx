import React, { useReducer, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Recommender from "./Components/layout/Recommender";
import DataDashBoard from "./Components/layout/DataDashBoard";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import Intro from "./Components/layout/Intro";
import { choiceReducer } from "./Components/reducer/choiceReducer";
import { ChoiceContext } from "./Components/context/ParameterContext";
import About from "./Components/layout/About";
import FAQs from "./Components/layout/FAQs";
import NotFound from "./Components/layout/NotFound";
import HomePageTwo from "./Components/layout/HomePageTwo";
import NavBar from "./Components/layout/NavBar";
import Compare from "./Components/layout/Compare";

const App = () => {
  const [choice, choiceDispatch] = useReducer(choiceReducer, {
    healthField: true,
    educationField: true,
    propertyField: true,
    jobField: false
  });

  //Ranked suburblist presist for data dashboard and compare function
  const [suburbList, setSubList] = useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem("suburb") || "0");
    } catch (e) {
      console.log(e);
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem("suburb", JSON.stringify(suburbList));
  }, [suburbList]);

  const client = new ApolloClient({
    uri: `${process.env.REACT_APP_URL}/graphql?`
  });

  return (
    <div className="App">
      <NavBar />
      <ApolloProvider client={client}>
        <ChoiceContext.Provider
          value={{
            choiceDispatch,
            choice,
            suburbList,
            setSubList
          }}
        >
          <Switch>
            <Route path="/dashboard/:id" component={DataDashBoard} />
            <Route path="/recommend" component={Recommender} />
            <Route path="/compare/:id" component={Compare} />
            <Route path="/about" component={About} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/" component={HomePageTwo} />
            <Redirect to="/not-found" />
          </Switch>
        </ChoiceContext.Provider>
      </ApolloProvider>
    </div>
  );
};

export default App;
