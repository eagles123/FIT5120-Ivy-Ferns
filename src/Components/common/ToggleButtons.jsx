import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

class ToggleButtons extends React.Component {
  state = {
    alignment: "left",
    formats: ["bold"]
  };

  handleFormat = (event, formats) => this.setState({ formats });

  render() {
    const { alignment, formats } = this.state;

    return (
      <Grid item xs={12} sm={7}>
        <div>
          <ToggleButtonGroup value={formats} onChange={this.handleFormat}>
            <ToggleButton value="bold">Health</ToggleButton>
            <ToggleButton value="italic">Education</ToggleButton>
            <ToggleButton value="underlined">Property</ToggleButton>
            <ToggleButton value="color">Employment</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Grid>
    );
  }
}

export default ToggleButtons;
