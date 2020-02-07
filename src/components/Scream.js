import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// MUI Components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

let styles = {
  card: {
    display: "flex",
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25
  }
};

function Scream(props) {
  dayjs.extend(relativeTime);
  const { classes, scream } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        image={scream.userImage}
        title="Profile image"
        className={classes.image}
      />
      <CardContent className={classes.content}>
        <Typography
          variant="h5"
          component={Link}
          to={`/users/${scream.userHandle}`}
          color="primary"
        >
          {scream.userHandle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {dayjs(scream.createdAt).fromNow()}
        </Typography>
        <Typography variant="body1">{scream.body}</Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Scream);
