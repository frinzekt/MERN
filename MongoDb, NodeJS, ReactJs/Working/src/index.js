import React from "react";
import PropTypes from "prop-types";
import ReactDom from "react-dom";

import App from "./components/App";

ReactDom.render(<App />, document.getElementById("root"));

setTimeout(() => {
	ReactDom.render(<h2>....</h2>, document.getElementById("root"));
}, 4000);
