//Where API logic is placed

import axios from "axios";

//RECEIVES DATA FROM GIVEN API
export const fetchContest = contestId => {
	return axios.get(`/api/contests/${contestId}`).then(resp => resp.data);
};
