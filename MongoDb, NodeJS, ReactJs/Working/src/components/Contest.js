import React, { Component } from "react";
import PropTypes from "prop-types";

export class Contest extends Component {
	state = {};

	render() {
		return (
			<div className="Contest">
				<div className="content-description">{this.props.description}</div>
				<div className="home-link link" onClick={this.props.onContestClick}>
					Content List
				</div>
			</div>
		);
	}
}

Contest.PropTypes = {
	id: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired
};

export default Contest;
