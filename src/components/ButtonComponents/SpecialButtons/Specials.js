import React, { useState } from "react";
import { specials } from "../../../data"
import SpecialButton from "./SpecialButton"

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
	// STEP 2 - add the imported data to state
	const [specialState, setSpecialState] = useState(specials);

	return (
		<div id="specials">
			{
				specialState.map((special, index) => {
					return <SpecialButton key={index} special={special} clearEverything={props.clearEverything} />
				})
			}
		</div>
	);
};

export default Specials