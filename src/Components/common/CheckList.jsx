import React from "react";
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  withStyles
} from "@material-ui/core";

export default function CheckList(props) {
  const { classes, choices } = props;

  return (
    <List
      style={{
        width: "100%",
        maxWidth: "280px",
        backgroundColor: "#ff5252"
      }}
    >
      {choices.map(choice => (
        <ListItem
          key={choice.label}
          role={undefined}
          dense
          button
          onClick={choice.action}
        >
          <Checkbox checked={choice.chose} />
          <ListItemText
            primary={choice.label}
            style={{ fontSize: "20px", color: "#eceff1" }}
          />
        </ListItem>
      ))}
    </List>
  );
}

// export default withStyles(styles)(CheckList);
