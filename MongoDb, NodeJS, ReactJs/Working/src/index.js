import React from "react";
import PropTypes from "prop-types";
import ReactDom from "react-dom";

const color = Math.random() > 0.5 ? "green" : "red";

const App = props => {
	return (
		<h2 className="text-center" style={{ color }}>
			{props.headerMessage}
		</h2>
	);
};

App.propTypes = {
	//string refers to limitation of type via string, isRequired refers to limitation of non-null value
	headerMessage: PropTypes.string.isRequired
};

App.defaultProps = {
	headerMessage: "Hello"
};

ReactDom.render(<App />, document.getElementById("root"));
