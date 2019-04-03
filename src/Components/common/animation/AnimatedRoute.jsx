import React, { Component } from "react";
import { Transition } from "react-spring/renderprops";
import { Route } from "react-router-dom";
import { Container } from "./AniComponent";

const AnimatedRoute = ({ children }) => (
  <Route
    render={({ location }) => (
      <Transition
        native
        items={location}
        from={{ opacity: 0, transform: "perspective(900px) rotateY(180deg)" }}
        enter={{ opacity: 1, transform: "perspective(900px) rotateY(180deg)" }}
        leave={{
          opacity: 0,
          transform: "perspective(900px) rotateY(180deg)"
        }}
      >
        {location => style => (
          <Container style={style}>{children(location)}</Container>
        )}
      </Transition>
    )}
  />
);
export default AnimatedRoute;
