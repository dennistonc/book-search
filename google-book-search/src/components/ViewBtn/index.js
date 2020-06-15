import React from "react";
import "./style.css";


function ViewBtn(props) {
  return (
    <a {...props} target="_blank"
    rel="noopener noreferrer"><button className="btn view-btn" tabIndex="0">
      View
    </button></a>
  );
}

export default ViewBtn;