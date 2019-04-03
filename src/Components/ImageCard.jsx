import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

export default function ImageCard({ title, image }) {
  return (
    <Card className="ImageCard">
      <CardHeader className="ImageHeader" title={title} />
      <CardMedia className="ImageMedia" image={image} title="Paella dish" />
    </Card>
  );
}
