import React from "react";
import "./style.css";


function SaveBtn(props) {
  return (
    <button type="button" className="btn save-btn"><span {...props} role="button" tabIndex="0">
      Save Book
    </span></button>
  );
}

export default SaveBtn;