import React from "react";
import ReactDOM from "react-dom";

var style = {
  backgroundColor: "orange",
  color: "white",
  fontFamily: "Arial"
};

var x = 5151;

/*
const title = React.createElement(
  "ul",
  { id: "title", className: "header", style: style },
  React.createElement("li", {}, "item in our list")
);*/

ReactDOM.render(
  <div style={style}>
    <h1 id="heading-element">Hello World {x}</h1>
    <p>Description</p>
  </div>,

  document.getElementById("root")
);
