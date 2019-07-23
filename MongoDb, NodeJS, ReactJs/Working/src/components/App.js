import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Header from "./header";
import ContestPreview from "./ContestPreview";

class App extends React.Component {
	state = {
		pageHeader: "Naming Contest via State Variable",
		contests: this.props.initialContests
	};

	componentDidMount() {
		//Fetch Request
		/* This method has been learned in React-Essential Training
		fetch("http://localhost:8080/api/contests")
			.then(data => data.json())
			.then(data => this.setState({ contests: data.contests }));
		*/
		//Axios Request/ Ajax Request uses axios library
		axios
			.get("/api/contests")
			.then(resp => {
				this.setState({
					contests: resp.data.contests
				});
			})
			.catch(console.error);
	}

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
