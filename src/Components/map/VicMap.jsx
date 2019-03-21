import React from "react";
import * as d3 from "d3";

export default class VicMap extends React.Component {
  constructor() {
    super();
    this.state = {
      vicMap: null
    };
  }

  //   componentWillMount() {
  //     const url =
  //       "https://raw.githubusercontent.com/eagles123/Health_Application/master/vic-map.json";
  //     d3.json(url, function(error, vicMap) {
  //       var geojson = topojson.feature(vicMap, vicMap.objects.vicmap);
  //     });
  //   }

  componentDidMount() {
    const myMap = require("./vicGeo.json");
    this.setState({ vicMap: myMap });
    // fetch(
    //   "https://raw.githubusercontent.com/eagles123/Health_Application/master/vicGeo.json"
    // ).then(response => {
    //   if (response.status !== 200) {
    //     console.log(`There is a problem: ${response.status}`);
    //     return;
    //   }
    //   response.json().then(vicMap => {
    //     this.setState({
    //       vicMap
    //     });
    //   });
    // });
  }
  componentDidUpdate() {
    const myMap = require("./vicGeo.json");
    // console.log(myMap + "??");
    const svg = d3.select(this.refs.anchor),
      { width, height } = this.props;

    const projection = d3
      .geoMercator()
      .scale(4500)
      .center([144.63, -37.29])
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    svg
      .selectAll("path")
      .data(this.state.vicMap.features)
      .enter()
      .append("path")
      .attr("d", path);
  }

  render() {
    const { vicMap } = this.state;

    if (!vicMap) {
      return null;
    }

    return <g ref="anchor" />;
  }
}
