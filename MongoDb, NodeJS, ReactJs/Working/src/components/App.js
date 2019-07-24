import React from "react";

import Header from "./header";

import ContentList from "./ContentList";

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
				<ContentList contests={this.state.contests} />
			</div>
		);
	}
}

export default App;
