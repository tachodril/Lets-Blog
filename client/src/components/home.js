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
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      blogList: [],
      flag: 0,
      isLoggedIn: 0,
      moveToSignin: 0
    };
    this.logOut = this.logOut.bind(this);
    this.openSignIn = this.openSignIn.bind(this);
  }

  componentWillMount() {
    var mtoken = ls.get("token");
    console.log(mtoken);

    if (mtoken !== null) {
      this.setState({ isLoggedIn: 1 });
    }
    axios
      .get("http://localhost:7000/blogs")
      .then(results => {
        this.setState({ isLoaded: true, blogList: results.data });
        console.log(this.state.blogList);
        console.log("connected to node server");
      })
      .catch(err => {
        console.log(err);
      });
  }

  logOut() {
    ls.set("token", null);
    {
      this.setState({ isLoggedIn: 0 });
    }
  }
  openSignIn() {
    this.setState({ moveToSignin: 1 });
  }

  render() {
    const { isLoaded, blogList, flag, isLoggedIn, moveToSignin } = this.state;
    //console.log(blogList);
    if (moveToSignin) {
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
            {isLoggedIn ? (
              <Button
                style={buttonStyle}
                variant="contained"
                color="primary"
                onClick={this.logOut}
              >
                Logout
              </Button>
            ) : null}
            {!isLoggedIn ? (
              <Button
                style={buttonStyle}
                variant="contained"
                color="primary"
                onClick={this.openSignIn}
              >
                Signin
              </Button>
            ) : null}
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
