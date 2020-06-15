import React from "react";

// This file exports the Input, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, background: "#a5ac82", color: "#ffffff" }} className="form-btn btn col-lg-1">
      {props.children}
    </button>
  );
}