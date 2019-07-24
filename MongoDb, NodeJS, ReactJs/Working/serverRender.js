import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "./src/components/App";

//fetch data from the api
import axios from "axios";
import config from "./config";

const serverRender = () =>
	axios.get(`${config.serverUrl}/api/contests`).then(resp => {
		//This used to be returning only the initialMarkup -> Content
		return {
			initialMarkup: ReactDOMServer.renderToString(
				<App initialContests={resp.data.contests} />
			),
			initialData: resp.data
		};
	});

export default serverRender;
