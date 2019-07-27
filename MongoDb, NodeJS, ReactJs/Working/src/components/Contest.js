import React, { Component } from "react";
import PropTypes from "prop-types";

export class Contest extends Component {
	state = {};

	render() {
		return <div className="Contest">{this.props.id}</div>;
	}
}

Contest.PropTypes = {
	id: PropTypes.number.isRequired
};

export default Contest;
