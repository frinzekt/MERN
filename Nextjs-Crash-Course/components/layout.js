import Head from "./head";
import Nav from "./nav";

import React from "react";
import PropTypes from "prop-types";

const Layout = props => {
	return (
		<div>
			<Head title="Home" />
			<Nav />
			<div className="container">{props.children}</div>
		</div>  
	);
};

Layout.propTypes = {};

export default Layout;
