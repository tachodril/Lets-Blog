import React, { Component } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Blog from "./components/blog_card";
//import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
//import { Redirect } from "react-router-dom";

var buttonStyle = {
  padding: "10px",
  marginLeft: "300px",
  marginTop: "50px"
};

class App extends Component {
  state = {
    isLoaded: false,
    blogList: []
  };

  componentWillMount() {
    axios
      .get("http://localhost:7000/blogs")
      .then(results => {
        this.setState({ isLoaded: true, blogList: results.data });
        console.log(this.state.blogList);
        console.log("connected to node server");
      })
      .catch(err => console.log(err));
  }

  render() {
    const { isLoaded, blogList } = this.state;
    //console.log(blogList);

    if (!isLoaded) {
      return <div>Loading Please Wait...</div>;
    } else {
      return (
        <div>
          <div>
            <Button style={buttonStyle} variant="contained" color="primary">
              Create a new blog
            </Button>
          </div>
          {blogList.map((blog, index) => (
            <Blog blog_data={blog} />
          ))}
        </div>
      );
    }
  }
}

export default App;
