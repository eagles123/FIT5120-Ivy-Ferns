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
    border: "2px solid #9ccc65",
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
        placeholder="Search a Suburb by Name"
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    </Paper>
    // <React.Fragment>
    //   <div className="nav-wrapper">
    //     <form>
    //       <div className="input-field">
    //         <input id="search" type="search" required />
    //         <label className="label-icon" for="search">
    //           <i className="material-icons">search</i>
    //         </label>
    //         <i className="material-icons">close</i>
    //       </div>
    //     </form>
    //   </div>
    // </React.Fragment>
  );
}

SearchBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBox);
