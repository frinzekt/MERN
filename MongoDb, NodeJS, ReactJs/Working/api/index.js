import express from "express";
import data from "../src/testData";

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
	//console.info(obj, "FIRST");
	obj[contest.id] = contest;
	return obj;
}, {});

router.get("/contests", (req, res) => {
	res.send({
		//Assigns a key value pair ID(contestID) to the contest to avoid separate parsing of array
		//.reduce uses the syntax (total,element(like a singular element in for each loop), initial value of total)
		//reduce will run the function and every return will be tallied/added to the total
		contests: contests
	});
});

export default router;
