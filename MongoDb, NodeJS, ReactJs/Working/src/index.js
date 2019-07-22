import React from "react";
import PropTypes from "prop-types";
import ReactDom from "react-dom";

const color = Math.random() > 0.5 ? "green" : "red";

const Header = ({ message }) => {
	return (
		<h2 className="text-center Header" style={{ color }}>
			{message}
		</h2>
	);
};

Header.propTypes = {
	//string refers to limitation of type via string, isRequired refers to limitation of non-null value
	message: PropTypes.string.isRequired
};

Header.defaultProps = {
	message: "Hello"
};

const App = props => {
	return (
		<div className="App">
			<Header message="Naming Contest For Header" />
			<div>...</div>
		</div>
	);
};

ReactDom.render(<App />, document.getElementById("root"));
