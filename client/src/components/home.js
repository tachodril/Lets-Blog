import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Blog from "./blog_card";
import axios from "axios";
import { Redirect } from "react-router-dom";
import ls from "local-storage";

var buttonStyle = {
  padding: "10px",
  marginLeft: "30%",
  marginTop: "50px"
};

class Home extends Component {
  state = {
    isLoaded: false,
    blogList: [],
    flag: 0,
    login_flag: 0
  };

  componentWillMount() {
    var mls = ls.get("token");
    console.log(mls);

    axios
      .post("http://localhost:7000/blogs", { token: mls })
      .then(results => {
        this.setState({ isLoaded: true, blogList: results.data });
        console.log(this.state.blogList);
        console.log("connected to node server");
      })
      .catch(err => {
        this.setState({ login_flag: 1 });
        console.log(err);
      });
  }

  render() {
    const { isLoaded, blogList, flag, login_flag } = this.state;
    //console.log(blogList);

    if (login_flag) {
      return <Redirect to="/users/signin"></Redirect>;
    } else if (flag) {
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
