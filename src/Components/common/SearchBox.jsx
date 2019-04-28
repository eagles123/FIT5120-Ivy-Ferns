// import React from "react";
// import SearchIcon from "@material-ui/icons/Search";

// export default function SearchBox({ value, onChange }) {
//   return (
//     <React.Fragment>
//       <input
//         id="searchBox"
//         placeholder=" Search suburb... "
//         type="text"
//         value={value}
//         onChange={e => onChange(e.currentTarget.value)}
//         style={{ width: "300px", marginLeft: "5vw" }}
//       />
//     </React.Fragment>
//   );
// }
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
    marginLeft: "5vw",
    backgroundColor: "#f9fbe7"
  },
  input: {
    marginLeft: 8,
    flex: 1
  }
};

function SearchBox(props) {
  const { classes, value, onChange } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <SearchIcon />
      <InputBase
        className={classes.input}
        placeholder="Search Suburbs"
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    </Paper>
  );
}

SearchBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBox);
