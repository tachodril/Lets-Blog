import React, { Component } from "react";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
import CreateBlog from "./components/createBlog";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login_page";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create_blog">
              <CreateBlog />
            </Route>
            <Route path="/users/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
