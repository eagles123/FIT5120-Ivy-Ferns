import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-2x fa-check-circle";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        className={classes}
        aria-hidden="true"
        onClick={this.props.onClick}
        style={{ cursor: "pointer", color: "green" }}
      />
    );
  }
}

export default Like;
