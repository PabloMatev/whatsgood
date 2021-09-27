import React, { Component } from "react";
import ModalAdd from "./ModalAdd";
import ModalLogin from "./ModalLogin";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalAddOpened: false,
      isModalLoginOpened: false,
    };
  }
  searchField = "";
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ isModalLoginOpened: true })}>
            Login
          </button>
          <ModalLogin
            addUsertoTable={this.addUsertoTable}
            isOpened={this.state.isModalLoginOpened}
            onClose={() => this.setState({ isModalLoginOpened: false })}
          ></ModalLogin>
          <button onClick={() => this.setState({ isModalAddOpened: true })}>
            Register
          </button>
          <ModalAdd
            addUsertoTable={this.addUsertoTable}
            isOpened={this.state.isModalAddOpened}
            onClose={() => this.setState({ isModalAddOpened: false })}
          ></ModalAdd>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              this.searchField = e.target.value;
              console.log(this.searchField);
            }}
          />
          <button>click me</button>
        </div>
      </div>
    );
  }
}
