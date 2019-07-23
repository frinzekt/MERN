import React from "react";
import ReactDom from "react-dom";

import App from "./components/App";

ReactDom.render(
	//Assuming we don't have the data yet -> Which is being fetched from an API -> an initialization of Empty Array is needed
	//<App contests={[]}

	//Or a dynamic changing can be done in the state of the component
	<App />,
	document.getElementById("root")
);
