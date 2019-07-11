import React, { Component } from 'react'
import { render } from 'react-dom'

const Book = ({ title, author, pages }) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} </p>

		</section>

	)
}

const Library = () => {
	return (
		<div>
			<Book title="The Sun Also Rises" author="Ernest Timmingway" pages={250}></Book>
			<Book title="The Sun Also dadadRises" author="Erneadadast Timmingway" pages={21450}></Book>
			<Book title="The Sun Also Riadadadses" author="Ernest Timmdadaingway" pages={25110}></Book>
		</div>
	)
}
/*
let skiData = {
	total: 50,
	powder: 20,
	backcountry: 10,
	goal: 100
}

const getPercent = decimal => {
	return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
	return getPercent(total/goal)
}

const SkiDayCounter = ({total, powder, backcountry, goal}) => {
	return (
		<section>
				<div>
					<p>Total Days: {total}</p>
				</div>
				<div>
					<p>Powder Days: {powder}</p>
				</div>
				<div>
					<p>Backcountry Days: {backcountry}</p>
				</div>
				<div>
					<p>Goal Progress: {calcGoalProgress(total, goal)}</p>
				</div>
		</section>
	)
}
*/
render(
	
	<Library></Library>, 
	document.getElementById('root')
)
