import Fetch from "isomorphic-unfetch";

import Layout from "../components/layout";
import Prices from "../components/prices";

const Home = props => (
	<div className="Home">
		<Layout>
			<h1 className="title">Welcome to BitzPrice</h1>
			<Prices bpi={props.bpi} />
			<style jsx>{`
				.hero {
					width: 100%;
					color: #333;
				}
				.title {
					margin: 0;
					width: 100%;
					padding-top: 80px;
					line-height: 1.15;
					font-size: 48px;
				}
				.title,
				.description {
					text-align: center;
				}
				.row {
					max-width: 880px;
					margin: 80px auto 40px;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
				}
				.card {
					padding: 18px 18px 24px;
					width: 220px;
					text-align: left;
					text-decoration: none;
					color: #434343;
					border: 1px solid #9b9b9b;
				}
				.card:hover {
					border-color: #067df7;
				}
				.card h3 {
					margin: 0;
					color: #067df7;
					font-size: 18px;
				}
				.card p {
					margin: 0;
					padding: 12px 0 0;
					font-size: 13px;
					color: #333;
				}
			`}</style>
		</Layout>
	</div>
);

Home.getInitialProps = async function() {
	const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
	const data = await res.json();
	return {
		bpi: data
	};
};

export default Home;
