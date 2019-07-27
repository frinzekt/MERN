import React from "react";

import Header from "./header";
import ContestList from "./ContentList";
import ContestPreview from "./ContestPreview";
import Contest from "./Contest";

//Alias to Window.history.pushstate
//for support of older browser
const pushState = (obj, url) => {
	window.history.pushState(obj, "", url);
};

class App extends React.Component {
	state = {
		pageHeader: "Naming Contest via State Variable",
		contests: this.props.initialContests,
		currentContestId: 0
	};

	componentDidMount() {}

	componentWillUnmount() {
		console.log("will unmount");
	}

	fetchContests = contestId => {
		pushState({ currentContestId: contestId }, `/contest/${contestId}`);
		// lookup the contest
		// this.state.contests[contestId]
		this.setState({
			pageHeader: this.state.contests[contestId].contestName,
			currentContestId: contestId
		});
	};

	currentContent() {
		if (this.state.currentContestId) {
			//triple dot means spreading of properties
			/* eg. contests = contests
			-> id = id
			-> Category name = category name
			-> and so on


			*/
			return <Contest {...this.state.contests[this.state.currentContestId]} />;
		} else {
			return (
				<ContestList
					contests={this.state.contests}
					onContestClick={this.fetchContests}
				/>
			);
		}
	}

	render() {
		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				{this.currentContent()}
			</div>
		);
	}
}

export default App;
