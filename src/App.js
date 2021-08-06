import React from 'react' // Main 

import cardTemplate from './templates/cardTemplate' // To-do List

import Clock from './components/Clock' // Clock

import Button from './components/Button' // ToggleButton

// Calculator 
import Keypad from './components/Calculator/Keypad'
import ResultBox from './components/Calculator/ResultBox'

import CountClicks from './components/CountClicks'



class App extends React.Component
{
	constructor()
	{
		super()

		this.state = {
			result: ""
		}
		// binding methods
		this.calculate = this.calculate.bind(this)
		this.reset = this.reset.bind(this)
		this.ce = this.ce.bind(this)
		this.onButtonClick = this.onButtonClick.bind(this)
	}

	/**
	 * updates the result state, evaluating the equation
	 */
	calculate()
	{
		try
		{
			this.setState({
				// eslint-disable-next-line
				result: this.state.result + " = " + (eval(this.state.result) || "") // evaluate if present else append empty
			})
		}catch(e)
		{
			this.setState({
				result: "error" // displays 'error'
			})
		}
	}

	/**
	 * Reset the state
	 */
	reset = () =>
	{
		this.setState({
			result: "" // updates the default state, if reset button is pressed
		})
	}

	/**
	 * Clear one character from end of the equation
	 */
	ce = () =>
	{
		this.setState({
			result: this.state.result.slice(0, -1) // removes the last character from the current equation
		})
	}

	/**
	 * Append every button 'name' with previous state(result)
	 */
	onButtonClick(name)
	{
		// console.log(name) // debugging
		switch(name)
		{
			case "calc":
				this.calculate()
				break
			case "reset":
				this.reset()
				break
			case "ce":
				this.ce()
				break
			default:
				this.setState({
					result: this.state.result + name
				})
		}
		
	}


	// render the elements
	render()
	{
		return (
			// Main Body Container
			<div className="container">
				{/* Time */}
				<span id='clock'> 
					<Clock /> {/* Rendering Clock */}
				</span>

				<div className="row">
					{/* Page Title */}
					<span className="text-danger text-center float-start" style={{fontSize: '3rem', marginTop: '-3.5%'}}><u> React App </u></span>
				</div>

				<div className="row">
					<h4 className="text-muted text-center">
						{/* Page description */}
						My First React App Project 
					</h4>
				</div>

				{/* List contents */}
				<div className="row">
					<div className="col">
						<h3> 
							My Tasks: 
							{/* Add new Tasks Button */}
							<button className="ms-3 btn btn-danger" style={{fontSize: '1.2rem'}}>
								<i className="me-1 bi bi-plus"></i>
								Add New
							</button>
						</h3>
						
						<ol type='1' >
							{cardTemplate}
						</ol> 
					</div>
				</div>

				
				{/* ----------------------------- Toggle Button --------------------------------- */}
				<hr/>


				{/* Toggle Button Rendering */}
				<div className="d-flex justify-content-center">
					<Button />
				</div>


				{/* ----------------------------- Calculator ------------------------------- */}
				<hr/>


				{/* Calculator Application in React */}
				<div className="container">
					<div className="row">
						<h1 className="text-dark text-center"> Calculator Application </h1>
					</div>

					{/* Equation Box or Result Box */}
					<div className="row">
						<ResultBox result = {this.state.result} />
					</div>

					<Keypad onClick = {this.onButtonClick} />
				</div>
				{/* ------------------------- Login/Logout --------------------------------- */}
				<CountClicks />
			</div>

		)
	}
}
export default App;
