import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import ContestList from "./ContentList";
import ContestPreview from "./ContestPreview";
import Contest from "./Contest";
import * as api from "../api";

//Alias to Window.history.pushstate
//for support of older browser
const pushState = (obj, url) => {
	window.history.pushState(obj, "", url);
};

class App extends React.Component {
	static PropTypes = {
		initialData: PropTypes.object.isRequired
	};

	state = this.props.initialData;

	componentDidMount() {}

	componentWillUnmount() {
		console.log("will unmount");
	}

	fetchContests = contestId => {
		pushState({ currentContestId: contestId }, `/contest/${contestId}`);
		// lookup the contest
		// this.state.contests[contestId]

		api.fetchContest(contestId).then(contest => {
			this.setState({
				currentContestId: contest.id,
				contests: {
					...this.state.contests,
					[contest.id]: contest
				}
			});
		});
	};

	fetchContestsList = () => {
		pushState({ currentContestId: null }, `/`);
		// lookup the contest
		// this.state.contests[contestId]

		api.fetchContestsList().then(contests => {
			this.setState({
				currentContestId: null,
				contests
			});
		});
	};

	//Gets the Current Contest To be projected
	currentContest() {
		return this.state.contests[this.state.currentContestId];
	}

	pageHeader() {
		if (this.state.currentContestId) {
			return this.currentContest().contestName;
		}
		return "Naming Contests";
	}

	currentContent() {
		if (this.state.currentContestId) {
			//triple dot means spreading of properties
			/* eg. contests = contests
			-> id = id
			-> Category name = category name
			-> and so on


			*/
			return <Contest  {...this.currentContest()} />;
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
				<Header message={this.pageHeader()} />
				{this.currentContent()}
			</div>
		);
	}
}

export default App;
