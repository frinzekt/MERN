import React from "react";

const ContestPreview = ({ contest }) => {
	return (
		<div className="ContestPreview">
			<p>{contest.id}</p>
			<p>{contest.categoryName}</p>
			<p>{contest.contestName}</p>
		</div>
	);
};
export default ContestPreview;
