import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Typography
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    marginTop: 100,
    backgroundColor: "#9ccc65",
    position: "relative",
    overflow: "auto",
    maxHeight: "140vh",
    borderRadius: "8px"
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
});

function CompareList(props) {
  const { classes, suburbList, checked, handelCheck } = props;

  return (
    <List className={classes.root} subheader={<li />}>
      {suburbList.map(suburb => (
        <li key={`section-${suburb._id}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <hr />
            <ListItem
              key={`item-${suburb.suburbName}-${suburb.rank}`}
              onClick={() => handelCheck(suburb._id)}
            >
              <Checkbox
                checked={checked.indexOf(suburb._id) !== -1}
                color="primary"
              />
              <ListItemText
                primary={`${suburb.rank}. Suburb: ${suburb.suburbName}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {suburb.city}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </ul>
        </li>
      ))}
    </List>
  );
}

CompareList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompareList);
