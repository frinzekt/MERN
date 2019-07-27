import React from "react";
import PropTypes from "prop-types";

import ContestPreview from "./ContestPreview";

const ContestList = ({ contests, onContestClick }) => {
	return (
		<div className="ContestList">
			{Object.keys(contests).map(contestId => (
				<ContestPreview
					key={contestId}
					{...contests[contestId]}
					onClick={onContestClick}
				/>
			))}
		</div>
	);
};

ContestList.PropTypes = {
	contests: PropTypes.object,
	onContestClick: PropTypes.func.isRequired
};

export default ContestList;
