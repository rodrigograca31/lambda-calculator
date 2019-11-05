import React, { useState } from "react";
import { operators } from "../../../data"
import OperatorButton from "./OperatorButton"

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
	// STEP 2 - add the imported data to state
	const [operatorState, setOperatorState] = useState(operators);

	return (
		<div id="operators">
			{
				operatorState.map((operator, index) => {
					return <OperatorButton key={index} operator={operator} operation={props.operation} setOperation={props.setOperation} setCurrDisplay={props.setCurrDisplay} nums={{ num1: props.nums.num1, num2: props.nums.num2 }} />
				})
			}
		</div>
	);
};

export default Operators