import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Blog from "./components/blog_card";
import logo from "./logo.svg";
import "./App.css";

var buttonStyle = {
  padding: "10px",
  marginLeft: "300px",
  marginTop: "50px"
};

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Button style={buttonStyle} variant="contained" color="primary">
            Create a new blog
          </Button>
        </div>
        <Blog />
      </div>
    );
  }
}

export default App;
