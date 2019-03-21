import React, { Component } from "react";
import VicMap from "./VicMap";

export default class MapCanvas extends Component {
  render() {
    return (
      <svg width="960" height="600">
        <VicMap width={600} height={450} />
      </svg>
    );
  }
}
