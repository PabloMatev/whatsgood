import React, { Component } from "react";
import Homepage from "./Homepage";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpened: false,
    };
  }
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route
          path="/table"
          exact
          render={(props) => (
            <Table
              addUsertoState={this.addUsertoState}
              sortState={this.sortState}
              sortTable={this.sortTable}
              data={this.state.dataSet}
              {...props}
            />
          )}
          /> */}
          <Route path="/home" exact component={Homepage} />
          {/* <Route
          path="/user/:id"
          render={(props) => (
            <Information
              updateRow={this.updateRow}
              dataset={this.idCheck(props.match.params.id)}
              {...props}
            />
          )}
          /> */}
        </Switch>
      </Router>
    );
  }
}
