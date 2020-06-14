import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
            <h1 className="display-4">Google Book Search</h1>
            <p className="lead">Search and Save Books of your Choosing!</p>
        </div>
    </div>
  );
}

export default Jumbotron;