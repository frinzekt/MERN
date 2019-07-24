import React from "react";
import PropTypes from "prop-types";

class ContestPreview extends React.Component {
	handleClick = () => {
		console.log(this.props.contest.contestName);
	};

	render() {
		return (
			<div className="ContestPreview link" onClick={this.handleClick}>
				<div className="category-name">{this.props.contest.categoryName}</div>
				<div className="contest-name">{this.props.contest.contestName}</div>
			</div>
		);
	}
}

ContestPreview.PropTypes = {
	categoryName: PropTypes.string.isRequired,
	contestName: PropTypes.string.isRequired
};

export default ContestPreview;
