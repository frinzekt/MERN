import React from "react";
import ReactDom from "react-dom";

const color = Math.random() > 0.5 ? "green" : "red";

ReactDom.render(
	<h2 className="text-center" style={{ color }}>
		JSX -- {Math.random()}
	</h2>,
	document.getElementById("root")
);
