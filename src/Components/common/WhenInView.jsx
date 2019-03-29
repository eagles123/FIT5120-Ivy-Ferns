import React, { Component } from "react";
import { Waypoint } from "react-waypoint";
import { Divider } from "@material-ui/core";

export default class WhenInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };
  }

  onEnter = ({ previousPostion }) => {
    if (previousPostion === Waypoint.below) {
      this.setState({
        isInView: true
      });
    }
  };

  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnter} />
        {this.props.children({ isInView: this.state.isInView })}
      </div>
    );
  }
}
