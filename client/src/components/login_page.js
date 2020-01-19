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
var labelStyle = {
  padding: "12px 12px 12px 0",
  marginLeft: "15px",
  display: "inline-block",
  color: "#004080"
};
var buttonStyle = {
  padding: "10px",
  marginLeft: "50%",
  marginTop: "50px"
};
class Login extends Component {
  state = {
    musername: "",
    mpassword: "",
    redirect_flag: 0
  };
  updateUsername(evt) {
    this.setState({
      musername: evt.target.value
    });
  }
  updatePassword(evt) {
    this.setState({
      mpassword: evt.target.value
    });
  }

  login_button() {
    var t = this.state.musername;
    var c = this.state.mpassword;
    axios
      .post("http://localhost:7000/users/signin", {
        username: t,
        password: c
      })
      .then(res => {
        console.log(res);
        console.log("level react login");
        ls.set("token", res);
        console.log(ls.get("token"));

        this.setState({ redirect_flag: 1 });
      })
      .catch(err => {
        alert("User not found");
        console.log(err);
      });
  }

  render() {
    var { redirect_flag } = this.state;
    if (redirect_flag) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <form>
        <div style={{ marginLeft: "25%" }}>
          <label style={labelStyle}>UserName :</label>
          <input
            value={this.state.musername}
            onChange={evt => this.updateUsername(evt)}
            type="text"
            style={titleStyle}
          />
        </div>
        <div style={{ marginLeft: "25%" }}>
          <label style={labelStyle}>PassWord :</label>
          <input
            value={this.state.mpassword}
            onChange={evt => this.updatePassword(evt)}
            type="text"
            style={titleStyle}
          />
        </div>
        <div>
          <Button
            onClick={() => this.login_button()}
            style={buttonStyle}
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
        </div>
      </form>
    );
  }
}

export default Login;
