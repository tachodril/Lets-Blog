import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import image_link from "../constants/blog_image_link";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();
  //const imageLink = image_link;

  return (
    <Card
      className={classes.card}
      style={{
        padding: "10px",
        marginLeft: "200px",
        marginTop: "50px"
      }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body3" color="#FFCC00" component="p">
            AAj ka date
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ritik
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}