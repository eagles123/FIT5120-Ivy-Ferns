import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Typography,
  ListSubheader,
  Fab
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
  const { classes, suburbList, checked, handelCheck, handleOpen } = props;

  return (
    <List className={classes.root} subheader={<li />}>
      <ListSubheader style={{ fontSize: "20px" }}>
        Select up to 3 Suburbs{" "}
        <Fab
          size="small"
          color="primary"
          aria-label="Add"
          onClick={handleOpen}
          style={{ margin: "10px 0px 10px 20px" }}
        >
          <i className="fas fa-arrow-left" />
        </Fab>
      </ListSubheader>
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
