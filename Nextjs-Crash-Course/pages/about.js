import React from "react";
import PropTypes from "prop-types";

import Head from "../components/head";
import Nav from "../components/nav";
import Layout from "../components/layout";

const About = props => {
	return (
		<Layout>
			<div className="About">
				<h1>About BitzPrices</h1>
				<p>Application to view Bitcoin prices</p>
			</div>
		</Layout>
	);
};

About.propTypes = {};

export default About;
