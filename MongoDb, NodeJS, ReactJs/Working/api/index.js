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

router.get("/contests/:contestId", (req, res) => {
	//req.params.contestId - lookup contest
	let contest = contests[req.params.contestId];
	contest.description =
		"Nulla quis mollit minim sint irure occaecat incididunt cupidatat officia dolore commodo.";

	res.send(contest);
});

export default router;
