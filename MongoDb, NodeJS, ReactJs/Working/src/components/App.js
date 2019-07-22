import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import ContestPreview from "./ContestPreview";

class App extends React.Component {
	state = {
		pageHeader: "Naming Contest via State Variable",
		test: 42
	};

	componentDidMount() {
		console.log("did Mount");
	}

	componentWillUnmount() {
		console.log("will unmount");
	}

	render() {
		const { contests } = this.props;

		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				{contests.map(contest => (
					<ContestPreview key={contest.id} contest={contest} />
				))}
			</div>
		);
	}
}

export default App;
