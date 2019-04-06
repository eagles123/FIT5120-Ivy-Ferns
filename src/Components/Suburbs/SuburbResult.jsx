import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
  Avatar
} from "@material-ui/core";
import StyledButton from "../common/StyleButton";

const SuburbResult = ({ suburb }) => {
  return (
    <div className="col s12 m12">
      <Card
        raised={true}
        style={{ width: "350px", backgroundColor: "#ff5252" }}
      >
        {/* <CardHeader
          avatar={
            <Avatar aria-label="Recipe" style={{ backgroundColor: "red" }}>
              {suburb.name.charAt(0)}
            </Avatar>
          }
          title={suburb.name}
        /> */}
        <CardContent>
          <Typography variant="h5" component="h3" style={{ color: "white" }}>
            Suburb: {suburb.name}
          </Typography>
          <Typography component="span" style={{ color: "white" }}>
            {suburb.city}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button variant="contained" color="primary" size="small">
            Learn Morea
          </Button> */}
          <Link to="/dashboard" key={suburb.name}>
            <Button variant="contained" color="primary" size="small">
              <span style={{ fontSize: "15px" }}>coming soon...</span>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default SuburbResult;
