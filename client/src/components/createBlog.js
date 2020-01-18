import React, { Component } from "react";
import Button from "@material-ui/core/Button";

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
  state = {
    title: "",
    content: "",
    sender: ""
  };
  send_button() {}
  render() {
    return (
      <form>
        <div>
          <label style={labelStyle}>Title :</label>
          <input value={this.state.title} type="text" style={titleStyle} />
        </div>
        <div>
          <label style={labelStyle}>Content :</label>
          <textarea id="mcontent" rows="3" style={contentStyle}></textarea>
        </div>
        <div>
          <Button
            onClick={this.send_button}
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

export default createBlog;
