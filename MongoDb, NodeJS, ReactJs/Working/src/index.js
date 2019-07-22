import React from "react";
import PropTypes from "prop-types";
import ReactDom from "react-dom";

import data from "./testData";
console.log(data);

import App from "./components/App";

ReactDom.render(
	<App contest={data.contest} />,
	document.getElementById("root")
);
