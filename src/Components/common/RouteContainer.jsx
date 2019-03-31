import React, { Component } from "react";
import posed from "react-pose";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 500, beforeChildren: true },
  exit: { opacity: 0 }
});

export default RouteContainer;
