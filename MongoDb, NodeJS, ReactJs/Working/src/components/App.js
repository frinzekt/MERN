import React from "react";

import Header from "./header";
import ContentList from "./ContentList";

//Alias to Window.history.pushstate
//for support of older browser
const pushState = (obj, url) => {
	window.history.pushState(obj, "", url);
};

class App extends React.Component {
	state = {
		pageHeader: "Naming Contest via State Variable",
		contests: this.props.initialContests
	};

	componentDidMount() {}

	componentWillUnmount() {
		console.log("will unmount");
	}

	fetchContests = contestId => {
		pushState({ currentContestId: contestId }, `/contest/${contestId}`);
	};

	render() {
		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				<ContentList
					contests={this.state.contests}
					onContestClick={this.fetchContests}
				/>
			</div>
		);
	}
}

export default App;
