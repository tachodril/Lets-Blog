import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Redirect } from "react-router-dom";
import ls from "local-storage";

var titleStyle = {
  width: "50%",
  padding: "10px",
  margin: "15px",
  marginLeft: "25px",
  border: "2px solid #80bfff",
  borderRadius: "8px",
  boxSizing: "border-box",
  backgroundColor: "#f8f8f8",
  color: "#001a33"
};
var contentStyle = {
  width: "80%",
  height: "150px",
  padding: "10px",
  boxSizing: "border-box",
  border: "2px solid #80bfff",
  borderRadius: "8px",
  backgroundColor: "#f8f8f8",
  resize: "none",
  color: "#001a33"
};
var labelStyle = {
  padding: "12px 12px 12px 0",
  marginLeft: "15px",
  display: "inline-block",
  color: "#004080"
};
var buttonStyle = {
  padding: "10px",
  marginLeft: "300px",
  marginTop: "50px"
};

class createBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mtitle: "",
      mcontent: "",
      redirect_flag: 0,
      redirect_login_flag: 0
    };
    this.updatetitle = this.updatetitle.bind(this);
    this.updatecontent = this.updatecontent.bind(this);
    this.send_button = this.send_button.bind(this);
  }

  componentWillMount() {
    var mls = ls.get("token");
    if (mls === null) {
      this.setState({ redirect_login_flag: 1 });
    }
  }

  updatetitle(evt) {
    this.setState({
      mtitle: evt.target.value
    });
  }
  updatecontent(evt) {
    this.setState({
      mcontent: evt.target.value
    });
  }
  send_button() {
    var t = this.state.mtitle;
    var c = this.state.mcontent;
    var mls = ls.get("token");
    console.log(mls);
    axios
      .post("http://localhost:7000/create_blog", {
        title: t,
        content: c,
        sender: "Ritik",
        date: "Today",
        token: mls
      })
      .then(res => {
        console.log(res);
        this.setState({ redirect_flag: 1 });
      })
      .catch(err => {
        //this.setState({ redirect_login_flag: 1 });
        console.log(err);
      });
  }
  render() {
    var { redirect_flag, redirect_login_flag } = this.state;

    if (redirect_login_flag) {
      return <Redirect to="/users/signin"></Redirect>;
    } else if (redirect_flag) {
      return <Redirect to="/"></Redirect>;
    } else {
      return (
        <form>
          <div>
            <label style={labelStyle}>Title :</label>
            <input
              value={this.state.mtitle}
              onChange={evt => this.updatetitle(evt)}
              type="text"
              style={titleStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Content :</label>
            <textarea
              value={this.state.mcontent}
              onChange={evt => this.updatecontent(evt)}
              rows="3"
              style={contentStyle}
            ></textarea>
          </div>
          <div>
            <Button
              onClick={() => this.send_button()}
              style={buttonStyle}
              variant="contained"
              color="secondary"
            >
              Publish
            </Button>
          </div>
        </form>
      );
    }
  }
}

export default createBlog;
