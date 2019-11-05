import React, { useState } from "react";
import { numbers } from "../../../data"
import NumberButton from "./NumberButton"

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
	// STEP 2 - add the imported data to state

	const [numberState, setNumberState] = useState(numbers);

	return (
		<div id="numbers">
			{
				numberState.map((number, index) => {
					return <NumberButton key={index} number={number} setNum1={props.setNum1} setNum2={props.setNum2} nums={{ num1: props.nums.num1, num2: props.nums.num2 }} setCurrDisplay={props.setCurrDisplay} operation={props.operation}/>
				})
			}
		</div>
	);
};

export default Numbers;