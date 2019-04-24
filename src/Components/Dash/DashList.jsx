import React, { useContext } from "react";
import { ChoiceContext } from "../context/ParameterContext";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListSubheader
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    marginTop: 20,
    backgroundColor: "#d4e157",
    position: "relative",
    overflow: "auto",
    maxHeight: "80vh"
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  },
  inline: {
    display: "inline"
  }
});
//need to change key property to _id
function DashList(props) {
  const { classes, getSuburbByIdQuery } = props;
  const { suburbList } = useContext(ChoiceContext);

  return (
    <List className={classes.root} subheader={<li />}>
      <ListSubheader>Ranked Suburbs</ListSubheader>
      {suburbList.map(suburb => (
        <li key={`section-${suburb._id}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListItem key={`item-${suburb.suburbName}-${suburb.rank}`} button>
              <ListItemText
                primary={`Suburb: ${suburb.suburbName}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {suburb.city}
                    </Typography>
                    {` — No.${suburb.rank}`}
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

DashList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashList);

// export default function DashList() {
//   const { suburbList } = useContext(ChoiceContext);
//   return (
//     <List subheader={<li />}>
//       {suburbList.map(suburb => (
//         <li key={suburb.}>
//           <ul>
//             {suburbList.map(item => (
//               <ListItem key={suburb.suburbName} button>
//                 <ListItemText
//                   primary={`Suburb: ${suburb.suburbName}`}
//                   secondary={
//                     <React.Fragment>
//                       <Typography component="span" color="textPrimary">
//                         {suburb.city}
//                       </Typography>
//                       {`Ranked No. ${suburb.rank}`}
//                     </React.Fragment>
//                   }
//                 />
//               </ListItem>
//             ))}
//           </ul>
//         </li>
//       ))}
//     </List>
//   );
// }
