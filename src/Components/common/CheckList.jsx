import React, { useState } from "react";
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListSubheader,
  Collapse
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

export default function CheckList(props) {
  const { classes, choices } = props;
  const [perference, setperference] = useState(false);

  function handleClick() {
    setperference(!perference);
  }

  return (
    <List
      subheader={
        <ListSubheader
          component="div"
          style={{ fontSize: "20px", color: "white" }}
        >
          Filter
        </ListSubheader>
      }
      style={{
        width: "100%",
        maxWidth: "280px",
        backgroundColor: "#ff5252"
      }}
    >
      <ListItem button onClick={handleClick} style={{ color: "white" }}>
        <ListItemText
          disableTypography
          inset
          primary="By Perference"
          style={{ fontSize: "18px", color: "white" }}
        />
        {perference ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={perference} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
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
                //disableTypography to make text white
                disableTypography
                primary={choice.label}
                style={{ fontSize: "18px", color: "white" }}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}

// export default withStyles(styles)(CheckList);
