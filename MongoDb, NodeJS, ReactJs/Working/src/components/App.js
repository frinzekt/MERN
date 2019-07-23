import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import ContestPreview from "./ContestPreview";

import data from "../testData"; //API call simulation(getting data after rendering)

class App extends React.Component {
	state = {
		pageHeader: "Naming Contest via State Variable",
		contests: []
	};

	componentDidMount() {
		console.log(data);
		this.setState(prevState => ({
			contests: data.contests
		}));
	}

	componentWillUnmount() {
		console.log("will unmount");
	}

	render() {
		console.log(this.state.contests);
		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				{this.state.contests.map(contest => (
					<ContestPreview key={contest.id} contest={contest} />
				))}
			</div>
		);
	}
}

export default App;
