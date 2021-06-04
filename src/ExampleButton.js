import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Example(props) {
	const [count, setCount] = useState(0);
	const [time, setTime] = useState(0);

	// console.log("e4");

	useEffect(() => {
		console.log("e1");
		var intervalId = setInterval(() => {
			setTime((time) => time + 1);
			// console.log("e3");
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		console.log("e2");
		document.title = `you click ${count}`;
	}, [count]);

	return (
		<div>
			<span>{time}</span>
			<button onClick={() => setCount(count + 1)}>
				{props.label} {count}
			</button>
		</div>
	);
}

Example.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Example;
