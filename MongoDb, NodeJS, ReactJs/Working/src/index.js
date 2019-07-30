import React from "react";
import ReactDom from "react-dom";
import axios from "axios";

import App from "./components/App";

//This performs an API call which is unnecessary as the serverRender already calls this
/*
axios
	.get("/api/contests")
	.then(resp => {
		ReactDom.render(
			//The concept of the change is that for the checksum problem not to occur
			//The data has to be in the rendering side to begin with
			<App initialContests={resp.data.contests} />,
			document.getElementById("root")
		);
	})
	.catch(console.error);
*/

ReactDom.render(
	//The concept of the change is that for the checksum problem not to occur
	//The data has to be in the rendering side to begin with
	<App initialData={window.initialData} />,
	document.getElementById("root")
);
