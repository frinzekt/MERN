import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "./src/components/App";

//fetch data from the api
import axios from "axios";
import config from "./config";

const serverRender = () =>
	axios.get(`${config.serverUrl}/api/contests`).then(resp => {
		//Generates a rendered string of App components. Hence needs to be fed to the EJS file
		return ReactDOMServer.renderToString(
			<App initialContests={resp.data.contests} />
		);
	});

export default serverRender;
