import React, { useState } from "react";
import "./App.scss";
import Display from "./components/DisplayComponents/Display"
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers"
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"
import Specials from "./components/ButtonComponents/SpecialButtons/Specials"

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
	// STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
	// Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
	// Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
	// the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
	// Don't forget to pass the functions (and any additional data needed) to the components as props

	const [num1, setNum1] = useState(0)
	const [num2, setNum2] = useState(0)
	const [operation, setOperation] = useState(null)
	const [currDisplay, setCurrDisplay] = useState(null)

	const clearEverything = () => {
		setNum1(0);
		setNum2(0);
		setOperation(null);
		setCurrDisplay(null);
	}

	return (
		<div>
			<h1>RULES: </h1>
			<ol>
				<li>Only Integers</li>
				<li>No special ops</li>
				<li>Clear after = </li>
			</ol>
			<div className="container">
				<Logo />
				<div id="app">
					<Display currDisplay={currDisplay} />
					<div id="numpad">
						<Specials clearEverything={clearEverything} />
						<Numbers setNum1={setNum1} setNum2={setNum2} nums={{ num1: num1, num2: num2 }} setCurrDisplay={setCurrDisplay} operation={operation} />
					</div>
					<Operators operation={operation} setOperation={setOperation} setCurrDisplay={setCurrDisplay} nums={{ num1: num1, num2: num2 }} />
				</div>
			</div>
		</div>
	);
}

export default App;
