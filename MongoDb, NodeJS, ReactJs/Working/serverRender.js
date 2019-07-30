import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "./src/components/App";

//fetch data from the api
import axios from "axios";
import config from "./config";

//FUNCTION
const getAPIUrl = contestId => {
	//IF THERE IS AN ID THIS IS THE URL
	if(contestId){
		return `${config.serverUrl}/api/contests/${contestId}`;
	}
	return `${config.serverUrl}/api/contests`
}

//FUNCTION
	const getInitialData = (contestId, apiData) => {
		if(contestId){
			return{
				currentContestId:apiData.id,
				//FAKING AS IF ALL THE CONTESTS IS RETRIEVED
				//THIS IS BECAUSE THE API ONLY GIVES ONE SET OF DATA
				contests:{
					[apiData.id]: apiData
				}
			}
		}
			return {
				contests: apiData.contests
			};
	}

const serverRender = (contestId) =>
	axios.get(getAPIUrl(contestId)).then(resp => {
		//This used to be returning only the initialMarkup -> Content
		const initialData = getInitialData(contestId,resp.data);
		return {
			initialMarkup: ReactDOMServer.renderToString(
				<App initialData={initialData} />
			),
			initialData: resp.data
		};
	});

export default serverRender;
