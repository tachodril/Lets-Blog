import React, { Component } from "react";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
import CreateBlog from "./components/createBlog";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login_page";
import Signup from "./components/signup_page";

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
            <Route path="/users/signin">
              <Login />
            </Route>
            <Route to="/users/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
