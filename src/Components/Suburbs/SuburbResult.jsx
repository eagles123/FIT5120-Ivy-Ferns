import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions
} from "@material-ui/core";
import StyledButton from "../common/StyleButton";

const SuburbResult = ({ suburb }) => {
  return (
    <div className="col s12 m12">
      <Card
        raised={true}
        style={{ width: "400px", height: "115px", backgroundColor: "#ff5252" }}
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
          <Typography variant="h5" component="h5" style={{ color: "white" }}>
            No.{suburb.rank} Suburb: {suburb.name}
          </Typography>
          <Typography
            component="span"
            style={{ color: "white", marginBottom: "10px" }}
          >
            {suburb.city}
          </Typography>
          <Button variant="contained" color="primary" size="small">
            <span style={{ fontSize: "13px" }}>coming soon...</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuburbResult;
