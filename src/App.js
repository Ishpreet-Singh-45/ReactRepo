import React from 'react'
import ReactDOM from 'react-dom'
import cardTemplate from './templates/cardTemplate'
import task from './templates/tasks'
import Clock from './components/Clock'
import Button from './components/Button'



function App()
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


			{/* Toggle Button Rendering */}
			<Button />

			{/* Calculator Application in React */}
			<div className="container">
				<div className="row">
					<h1 className="text-dark text-center"> Calculator Application </h1>
				</div>
				<div className="row">
					<div class="d-flex justify-content-center">
						<input className="mt-5 form-input text-center" id="equation" name="equation" style={{width: '500px'}}></input> 
					</div>
				</div>
				<div className="row mt-5" id="calculatorTiles">
					<div className="d-flex justify-content-center">
						{/* Calculator Number tiles */}
						<div className="d-flex flex-row justify-content-evenly">
							<button type="button" className="btn btn-secondary mx-4 px-4" id="button7">7</button> 
							<button type="button" className="btn btn-secondary mx-4 px-4" id="button8">8</button> 
							<button type="button" className="btn btn-secondary mx-4 px-4" id="button9">9</button> 
						</div>
					</div>
					<div className="d-flex justify-content-center mt-3">
						<div className="d-flex flex-row justify-content-evenly">
							<button type="button" className="btn btn-secondary mx-4 px-4" id="button4">4</button> 
							<button type="button" className="btn btn-secondary mx-4 px-4" id="button5">5</button> 
							<button type="button" className="btn btn-secondary mx-4 px-4" id="button6">6</button> 
						</div>
					</div>
					<div className="d-flex justify-content-center mt-3">
						<div className="d-flex flex-row justify-content-evenly">
							<button type="button" className="btn btn-secondary mx-4 px-4" id="button1">1</button> 
							<button type="button" className="btn btn-secondary mx-4 px-4" id="button2">2</button> 
							<button type="button" className="btn btn-secondary mx-4 px-4" id="button3">3</button> 
						</div>
					</div>
					<div className="px-5 d-flex justify-content-center my-3">
						<button type="button" className="btn btn-secondary px-5" id="button0">0</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default App;
