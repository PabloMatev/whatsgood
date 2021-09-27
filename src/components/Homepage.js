import React, { Component } from "react";
import Modal from "./Modal";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpened: false,
    };
  }
  searchField = "";
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ isModalOpened: true })}>
            Add User
          </button>
          <Modal
            addUsertoTable={this.addUsertoTable}
            isOpened={this.state.isModalOpened}
            onClose={() => this.setState({ isModalOpened: false })}
          ></Modal>
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
