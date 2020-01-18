import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import image_link from "../constants/blog_image_link";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  //const imageLink = image_link;
  // var mtitle = this.props.blog_data.title;
  console.log(props.blog_data);

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
          image={image_link}
          className={classes.media}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.blog_data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.blog_data.content}
          </Typography>
          <Typography variant="body3" color="#FFCC00" component="p">
            {props.blog_data.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Published by - {props.blog_data.sender}
        </Button>
      </CardActions>
    </Card>
  );
}
