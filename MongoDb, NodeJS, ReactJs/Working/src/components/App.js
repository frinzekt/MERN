import React from "react";
import PropTypes from "prop-types";

import Header from "./header";

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
		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				<div>{this.state.test}</div>
			</div>
		);
	}
}

export default App;
