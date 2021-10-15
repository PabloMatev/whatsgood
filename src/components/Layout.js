import React, { Component } from "react";
import Homepage from "./Homepage";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Layout extends Component {
  setUser = (user) => {
    this.setState({ user: user, isLoggedin: true });
    console.log(this.state);
  };
  constructor(props) {
    super(props);

    this.state = {
      isModalOpened: false,
      user: {},
      isLoggedin: false,
    };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/home"
            render={() => <Homepage setUser={this.setUser} />}
          />
        </Switch>
      </Router>
    );
  }
}
