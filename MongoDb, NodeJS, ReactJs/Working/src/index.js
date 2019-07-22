import React from "react";
import PropTypes from "prop-types";
import ReactDom from "react-dom";

import data from "./testData";

import App from "./components/App";

ReactDom.render(
	<App contests={data.contests} />,
	document.getElementById("root")
);
