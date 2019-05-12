import React, { useState } from "react";
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListSubheader,
  Collapse
} from "@material-ui/core";
// import { ExpandLess, ExpandMore } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export default function CheckList(props) {
  const { choices, cities } = props;
  const [perference, setperference] = useState(true);
  const [Lga, setLga] = useState(false);

  function handlePreference() {
    setperference(!perference);
  }

  function handleLga() {
    setLga(!Lga);
  }

  return (
    <List
      subheader={
        <ListSubheader
          component="div"
          style={{ fontSize: "17px", color: "black", borderRadius: "10px" }}
        >
          Filter By:
        </ListSubheader>
      }
      style={{
        width: "100%",
        maxWidth: "300px",
        // backgroundColor: "#d4e157",
        backgroundColor: "#9ccc65",
        borderRadius: "10px"
      }}
    >
      <ListItem
        button
        onClick={handlePreference}
        style={{ color: "black", borderRadius: "10px" }}
      >
        <ListItemText
          disableTypography
          inset
          primary="Preference"
          style={{ fontSize: "13px" }}
        />
        {perference ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
              <Checkbox color="primary" checked={choice.chose} />
              <ListItemText
                //disableTypography to make text white
                disableTypography
                primary={choice.label}
                style={{ fontSize: "13px", color: "black" }}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>

      <ListItem button onClick={handleLga} style={{ color: "black" }}>
        <ListItemText
          disableTypography
          inset
          primary="Local Government Area"
          style={{ fontSize: "13px", color: "black" }}
        />
        {Lga ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={Lga} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {cities.map(choice => (
            <ListItem
              key={choice.label}
              role={undefined}
              dense
              button
              onClick={choice.action}
            >
              <Checkbox checked={choice.select} color="primary" />
              <ListItemText
                //disableTypography to make text white
                disableTypography
                primary={choice.label}
                style={{ fontSize: "13px", color: "black" }}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}

// export default withStyles(styles)(CheckList);
