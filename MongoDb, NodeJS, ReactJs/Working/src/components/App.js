import React from "react";

import Header from "./header";
import ContestPreview from "./ContestPreview";

class App extends React.Component {
	state = {
		pageHeader: "Naming Contest via State Variable",
		contests: this.props.initialContests
	};

	componentDidMount() {}

	componentWillUnmount() {
		console.log("will unmount");
	}

	render() {
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
