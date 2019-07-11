import React, {Component} from "react";
import ReactDOM, {render} from "react-dom";

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends Component {
	render() {
		const { total, powder, backcountry, goal } = this.props; /* 1. pointer props initialize from JSX*/

    return (
		<section>
			Ski Days
			<div>
				<p>total Days: {this.props.total}</p>
				<p>total Days: {total}</p> /* This only works for when sec 1. exist*/
			</div>
			<div>
				<p>powder Days: {this.props.powder}</p>
				<p>powder Days: {powder}</p>
			</div>
			<div>
				<p>backcountry Days: {this.props.backcountry}</p>
				<p>backcountry Days: {backcountry}</p>
			</div>
			<div>
				<p>goal Days: {this.props.goal}</p>
				<p>goal Days: {goal}</p>
			</div>
		</section>

	)
  }
}

/*
class Message extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.props.msg}</h1>
        <p>I'll check back in {this.props.minutes + 30} minutes</p>
      </div>
    );
  }
}*/

render(
  //<Message color="blue" age={50} msg="how are you?" minutes={50} />,
	<SkiDayCounter total={skiData.total}
		powder={skiData.powder}
		backcountry={skiData.backcountry}
		goal={skiData.goal}/>,
  document.getElementById("root")
);
