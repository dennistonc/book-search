import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
            <h1 className="display-4" id="jumboTitle">Google Book Search</h1>
            <p className="lead" id="jumboSubtitle">Search and Save Books of your Choosing!</p>
        </div>
    </div>
  );
}

export default Jumbotron;