import React from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";

const SuburbResult = ({ suburb }) => {
  return (
    <div className="col s12 m12">
      <Card
        raised={true}
        style={{
          width: "350px",
          height: "105px",
          backgroundColor: "#e91e63",
          marginBottom: "15px"
        }}
      >
        <CardContent>
          <Typography variant="h6" component="h6" style={{ color: "white" }}>
            No.{suburb.rank} Suburb: {suburb.suburbName}
          </Typography>
          <Typography
            component="span"
            style={{ color: "white", marginBottom: "8px" }}
          >
            {suburb.city}
          </Typography>
          <Button variant="contained" color="primary" size="small">
            <span style={{ fontSize: "10px" }}>coming soon...</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuburbResult;
