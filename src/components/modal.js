import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <div style={modal}>{children}</div>,
    document.getElementById("modal-root")
  );

const modal = {
  position: "fixed",
  top: "12px",
  padding: "12px",
  backgroundColor: "white",
  border: "1px solid grey"
};

export default Modal;
