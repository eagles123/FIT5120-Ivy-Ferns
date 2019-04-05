import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

export default function ImageCard({ title, image }) {
  return (
    <Card
      className="ImageCard"
      style={{
        boxShadow:
          "3px 4px 8px 6px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.5), 0px 2px 1px -1px rgba(0,0,0,0.12)"
      }}
    >
      <CardHeader className="ImageHeader" title={title} />
      <CardMedia className="ImageMedia" image={image} />
    </Card>
  );
}
