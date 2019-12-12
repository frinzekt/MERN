import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Prices extends Component {
	static propTypes = {
		prop: PropTypes
	};

	state = {
		currency: "USD"
	};

	handleChange = e => {
		console.log(e.target.value);
		this.setState({ currency: e.target.value });
	};

	render() {
		const { time, disclaimer, chartName, bpi } = this.props.bpi;

		let list = Object.keys(bpi).map(currency => {
			if (currency == this.state.currency) {
				return (
					<li className="list-group-item fadeAnime" key={bpi[currency].code}>
						Bitcoin rate for: {bpi[currency].description}
						<span className="badge badge-primary">{bpi[currency].code}</span>
						<strong>{bpi[currency].rate}</strong>
					</li>
				);
			}
		});

		let Currencies = Object.keys(bpi);

		return (
			<div className="Prices">
				<ul className="list-group">{list}</ul>
				<br />
				<select onChange={this.handleChange} className="form-control">
					{Currencies.map(currency => (
						<option key={currency} value={currency}>
							{currency}
						</option>
					))}
				</select>
			</div>
		);
	}
}
