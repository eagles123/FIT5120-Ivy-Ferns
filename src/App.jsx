import React, { useReducer } from "react";
import { Switch, Route, __RouterContext, Redirect } from "react-router-dom";
import "./App.css";
import Recommender from "./Components/layout/Recommender";
import DataDashBoard from "./Components/common/DataDashBoard";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Intro from "./Components/layout/Intro";
import { choiceReducer } from "./Components/reducer/choiceReducer";
import { ChoiceContext } from "./Components/context/ParameterContext";
import About from "./Components/layout/About";
import FAQs from "./Components/layout/FAQs";
import NotFound from "./Components/layout/NotFound";
import HomePageTwo from "./Components/layout/HomePageTwo";
import NavBar from "./Components/layout/NavBar";
import Nav from "./Components/layout/Nav";

const App = () => {
  const [choice, choiceDispatch] = useReducer(choiceReducer, {
    healthField: false,
    educationField: false,
    propertyField: false,
    jobField: false
  });

  const client = new ApolloClient({
    uri: "/graphql?"
  });

  return (
    <div className="App">
      <NavBar />
      {/* <Nav /> */}
      <ApolloProvider client={client}>
        <ChoiceContext.Provider value={{ choiceDispatch, choice }}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/recommend" component={Recommender} />
            <Route path="/dashboard" component={DataDashBoard} />
            <Route path="/intro" component={Intro} />
            <Route path="/not-found" component={NotFound} />
            {/* <Route path="/" exact component={HomePage} /> */}
            <Route path="/" component={HomePageTwo} />
            <Redirect to="/not-found" />
          </Switch>
        </ChoiceContext.Provider>
      </ApolloProvider>
    </div>
  );
};

export default App;
