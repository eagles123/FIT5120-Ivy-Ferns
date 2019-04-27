import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function ExpandList({ question, response }) {
  return (
    <div className="container-fluid">
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
        >
          <Typography style={{ fontSize: "21px" }}>{question}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontSize: "16px" }}>{response}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
