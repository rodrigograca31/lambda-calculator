import React from "react";
import "./SpecialButton.scss"

const SpecialButton = (props) => {
	return (
		<button onClick={() => props.clearEverything()}>{props.special}</button>
	);
};

export default SpecialButton