import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { NavLink, Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function Nav() {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="default"
        style={{ height: "65px", backgroundColor: "white" }}
      >
        <Toolbar>
          <a href="/" className="brand-logo">
            <img src={"icon1.png"} alt="" />
          </a>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
