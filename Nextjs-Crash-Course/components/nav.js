import React from "react";
import Link from "next/link";

const links = [
	{ href: "https://github.com/zeit/next.js", label: "GitHub" }
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = () => (
	<nav>
		<ul>
			<li>
				<Link prefetch href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link prefetch href="/about">
					<a>About</a>
				</Link>
			</li>
			<ul>
				{links.map(({ key, href, label }) => (
					<li key={key}>
						<Link href={href}>
							<a>{label}</a>
						</Link>
					</li>
				))}
			</ul>
		</ul>

		<style jsx>{`
			:global(body) {
				margin: 0;
				font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
					Helvetica, sans-serif;
			}
			nav {
				text-align: center;
			}
			ul {
				display: flex;
				justify-content: space-between;
				background: #333;
				color: #fff;
				list-style: none;
			}
			nav > ul {
				padding: 4px 16px;
			}
			li {
				font-size: 18px;
				margin-right: 20px;
			}
			a {
				color: #fff;
				text-decoration: none;
				font-size: 13px;
			}
		`}</style>
	</nav>
);

export default Nav;
