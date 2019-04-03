import React from "react";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
export default function CustomButton({ text, color, handleChange }) {
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        onClick={handleChange}
        style={{
          backgroundColor: color,
          borderRadius: 20,
          width: "250px",
          height: "40px",
          fontSize: 20
        }}
      >
        {text}
      </Button>
    </React.Fragment>
  );
}
