import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Blog from "./blog_card";
import axios from "axios";
import { Redirect } from "react-router-dom";

var buttonStyle = {
  padding: "10px",
  marginLeft: "300px",
  marginTop: "50px"
};

class Home extends Component {
  state = {
    isLoaded: false,
    blogList: [],
    flag: 0
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
    const { isLoaded, blogList, flag } = this.state;
    //console.log(blogList);

    if (flag) {
      return <Redirect to="/create_blog"></Redirect>;
    } else if (!isLoaded) {
      return <div>Loading Please Wait...</div>;
    } else {
      return (
        <div>
          <div>
            <Button
              onClick={() => this.setState({ flag: 1 })}
              style={buttonStyle}
              variant="contained"
              color="primary"
            >
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

export default Home;