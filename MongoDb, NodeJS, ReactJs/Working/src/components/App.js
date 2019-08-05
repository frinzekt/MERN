import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";
import Contest from "./Contest";
import * as api from "../api";

const pushState = (obj, url) => window.history.pushState(obj, "", url);

const onPopState = handler => {
	window.onpopstate = handler;
};

class App extends React.Component {
	static propTypes = {
		initialData: React.PropTypes.object.isRequired
	};
	state = {
		...this.props.initialData,
		formErrors: {
			newName: ""
		}
	};
	componentDidMount() {
		onPopState(event => {
			this.setState({
				currentContestId: (event.state || {}).currentContestId
			});
		});
	}
	componentWillUnmount() {
		onPopState(null);
	}
	fetchContest = contestId => {
		pushState({ currentContestId: contestId }, `/contest/${contestId}`);
		api.fetchContest(contestId).then(contest => {
			this.setState({
				currentContestId: contest._id,
				contests: {
					...this.state.contests,
					[contest._id]: contest
				}
			});
		});
	};
	fetchContestList = () => {
		pushState({ currentContestId: null }, "/");
		api.fetchContestList().then(contests => {
			this.setState({
				currentContestId: null,
				contests
			});
		});
	};

	fetchNames = nameIds => {
		api.fetchNames(nameIds).then(names => {
			this.setState({
				names
			});
		});
	};

	currentContest() {
		return this.state.contests[this.state.currentContestId];
	}
	pageHeader() {
		if (this.state.currentContestId) {
			return this.currentContest().contestName;
		}

		return "Naming Contests";
	}

	lookupName = nameId => {
		//Loading up page, the name structure will not be in the sate. Hence it will be undefined
		// if condition will prevent accessing an invalid state variable

		if (!this.state.names || !this.state.names[nameId]) {
			return {
				name: "..."
			}; //YOU COULD PUT LOADER HERE
		}

		return this.state.names[nameId];
	};

	addName = (newName, contestId) => {
		api
			.addName(newName, contestId)
			.then(resp => {
				if (!resp.error) {
					this.setState({
						contests: {
							...this.state.contest,
							[resp.updatedContest._id]: resp.updatedContest
						},
						names: {
							...this.state.names,
							[resp.newName._id]: resp.newName
						}
					});
				} else {
					this.setState({ formErrors: { newName: resp.error } });
				}
			})
			.catch(console.error);
	};

	currentContent() {
		if (this.state.currentContestId) {
			//ASSUME THAT the App component will pass down property for every contest to fetchthenames
			return (
				<Contest
					contestListClick={this.fetchContestList}
					fetchNames={this.fetchNames}
					lookupName={this.lookupName}
					addName={this.addName}
					formErrors={this.state.formErrors}
					{...this.currentContest()}
				/>
			);
		}

		return (
			<ContestList
				onContestClick={this.fetchContest}
				contests={this.state.contests}
			/>
		);
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
