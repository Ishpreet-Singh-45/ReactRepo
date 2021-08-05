/**
 * Component for Calculator Keypad
*/

import React from 'react'


class Keypad extends React.Component
{
	/**
	 * this.props.onClick() function will pass the 'name' of the button to the parent function i.e. 'App.js'
	 * @returns the html view
	 */
	render()
	{
		return (
			<div className="row position-relative" id="calculatorTiles">
				<button type="button" className="position-absolute top-0 start-50 translate-middle mt-3 px-5 btn btn-success" name="calc" id="calc" onClick = {e => this.props.onClick(e.target.name)} style={{width: '200px'}}>
                    Calculate
                </button>
				<div className="d-flex justify-content-center mt-5">
					{/* Calculator Number tiles */}
					<div className="d-flex flex-row justify-content-evenly">
						<button type="button" className="btn btn-secondary mx-4 px-4" id="button7" name="7" onClick={e => this.props.onClick(e.target.name)}>
							7
						</button> 
						<button type="button" className="btn btn-secondary mx-4 px-4" id="button8" name="8" onClick={e => this.props.onClick(e.target.name)}>
							8
						</button> 
						<button type="button" className="btn btn-secondary mx-4 px-4 position-relative" id="button9" name="9" onClick={e => this.props.onClick(e.target.name)}>
							9
						</button> 
						<button type="button" className="position-absolute translate-middle-x btn btn-secondary px-auto" onClick={e => this.props.onClick("+")} style={{left: '65%'}}>
							<i className="bi bi-plus-lg"></i>
						</button>
					</div>
				</div>
				<div className="d-flex justify-content-center mt-3">
					<div className="d-flex flex-row justify-content-evenly">
						<button type="button" className="btn btn-secondary mx-4 px-4" id="button4" name="4" onClick={e => this.props.onClick(e.target.name)}>
							4
						</button> 
						<button type="button" className="btn btn-secondary mx-4 px-4" id="button5" name="5" onClick={e => this.props.onClick(e.target.name)}>
							5
						</button> 
						<button type="button" className="btn btn-secondary mx-4 px-4 position-relative" id="button6" name="6" onClick={e => this.props.onClick(e.target.name)}>
							6
						</button> 
						<button type="button" className="position-absolute translate-middle-x btn btn-secondary px-auto" onClick={e => this.props.onClick("-")} style={{left: '65%'}}>
							<i className="bi bi-dash-lg"></i>
						</button>
					</div>
				</div>
				<div className="d-flex justify-content-center mt-3">
					<div className="d-flex flex-row justify-content-evenly">
						<button type="button" className="btn btn-secondary mx-4 px-4" id="button1" name="1" onClick={e => this.props.onClick(e.target.name)}>
							1
						</button> 
						<button type="button" className="btn btn-secondary mx-4 px-4" id="button2" name="2" onClick={e => this.props.onClick(e.target.name)}>
							2
						</button> 
						<button type="button" className="btn btn-secondary mx-4 px-4" id="button3" name="3" onClick={e => this.props.onClick(e.target.name)}>
							3
						</button> 
						<button type="button" className="position-absolute translate-middle-x btn btn-secondary px-auto" onClick={e => this.props.onClick("*")} style={{left: '65%'}}>
							<i className="bi bi-asterisk"></i>
						</button>
					</div>
				</div>
				<div className="px-5 d-flex justify-content-center my-3">
					<button type="button" className="btn btn-secondary px-auto mx-4" name="reset" onClick={e => this.props.onClick(e.target.name)}>Clear</button>
					<button type="button" className="btn btn-secondary px-5" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
					<button type="button" className="btn btn-secondary px-4 mx-3" name="ce" onClick={e => this.props.onClick(e.target.name)}>CE</button>
					<button type="button" className="position-absolute translate-middle-x btn btn-secondary px-auto" onClick={e => this.props.onClick("/")} style={{left: '65%'}}>
						<i className="bi bi-slash-lg"></i>
					</button>
				</div>
			</div>
		)
	}
}


export default Keypad