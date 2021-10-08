import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import axios from "axios";

const portalRoot = document.getElementById("portal-root");

const ModalLogin = ({ isOpened, children, onClose, addUsertoTable }) => {
  if (!isOpened) {
    return null;
  }

  const loginUser = (data) => {
    axios.post("http://localhost:5000/login", data).then((res) => {});
  };
  let personalSet = {
    name: "",
    email: "",
    password: "",
  };

  return ReactDOM.createPortal(
    <div>
      <div className="overlay">
        <div className="modals">
          <span className="close-button" onClick={onClose}>
            X
          </span>
          <div>
            <span>Login</span>
            <br />
            <br />
            <input
              placeholder="Email"
              type="text"
              onChange={(e) => {
                personalSet.email = e.target.value;
                console.log(e.target.value);
              }}
            />
            <br />
            <input
              placeholder="Password"
              type="text"
              onChange={(e) => {
                personalSet.password = e.target.value;
                console.log(e.target.value);
              }}
            />
            <br />
            <button
              onClick={() => {
                loginUser(personalSet);
                onClose();
              }}
              style={{ margin: "5%" }}
            >
              asd
            </button>
          </div>
        </div>
      </div>
    </div>,
    portalRoot
  );
};

export default ModalLogin;
