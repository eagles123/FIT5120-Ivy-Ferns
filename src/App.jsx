import React, { useReducer, useState } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import "./App.css";
import Recommender from "./Components/layout/Recommender";
import DataDashBoard from "./Components/common/DataDashBoard";
import HomePage from "./Components/layout/HomePage";
import { PoseGroup } from "react-pose";
import RouteContainer from "./Components/common/RouteContainer";
import Intro from "./Components/layout/Intro";
import { choiceReducer } from "./Components/reducer/choiceReducer";
import { ChoiceContext } from "./Components/context/ParameterContext";
import HomePageTwo from "./Components/layout/HomePageTwo";
import About from "./Components/layout/About";
import NavBar from "./Components/layout/NavBar";
import { Fade, Roll, Flip } from "react-reveal";
import FAQs from "./Components/layout/FAQs";

const App = () => {
  const [choice, choiceDispatch] = useReducer(choiceReducer, {
    healthField: false,
    educationField: false,
    propertyField: false,
    jobField: false
  });

  //   const [state, stateDispatch] = useReducer(recReducer, {
  //   healthScore: 10,
  //   educationScore: 0,
  //   propertyType: "buy",
  //   propertyScore: 0,
  //   jobScore: 0
  // });
  // return transitions.map(({ item, props, key }) => (
  //   <animated.div key={key} style={props}>
  //     <Switch location={item}>
  //       <Route exact path="/" component={HomePage} />
  //       <Route path="/recommend" component={Recommender} />
  //       <Route path="/intro" render={() => <Intro parentState={dispatch} />} />
  //       <Route path="/dashboard" component={DataDashBoard} />
  //     </Switch>
  //   </animated.div>
  // ));

  return (
    <React.Fragment>
      <Fade top duration={1500}>
        <NavBar />
      </Fade>
      <main role="main">
        <Switch>
          <ChoiceContext.Provider value={{ choiceDispatch, choice }}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePageTwo} />
            <Route exact path="/about" component={About} />
            <Route exact path="/faqs" component={FAQs} />

            <Route path="/recommend" component={Recommender} />
            <Route path="/dashboard" component={DataDashBoard} />
            <Route path="/intro" component={Intro} />
          </ChoiceContext.Provider>
        </Switch>
      </main>
    </React.Fragment>
  );

  // return (
  //   <Route
  //     render={({ location }) => (
  //       <div id="site-container">
  //         <NavBar />
  //         <div id="content-container">
  //           <PoseGroup>
  //             <RouteContainer key={Math.random()}>
  //               <Switch location={location}>
  //                 <ChoiceContext.Provider value={{ dispatch, choice, handleH }}>
  //                   <Route exact path="/" component={HomePage} />
  //                   <Route path="/recommend" component={Recommender} />
  //                   <Route path="/intro" component={Intro} />
  //                 </ChoiceContext.Provider>
  //                 <Route path="/dashboard" component={DataDashBoard} />
  //               </Switch>
  //             </RouteContainer>
  //           </PoseGroup>
  //         </div>
  //       </div>
  //     )}
  //   />
  // );
};

export default App;
