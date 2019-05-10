import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    height: 390,
    boxShadow: "0 5px 19px 1px rgba(0, 0, 0, .5)"
  },
  media: {
    height: 200
  }
};

function ImageCard(props) {
  const { classes, url, title, content1, content2, website } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <CardMedia className={classes.media} image={url} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography component="p" style={{ marginLeft: "1vw" }}>
              <i className="fas fa-check" /> {"  "}
              {content1}
            </Typography>
            <Typography component="p" style={{ marginLeft: "1vw" }}>
              <i className="fas fa-check" />
              {"  "}
              {content2}
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>
    </Card>
  );
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageCard);
