/**
 * Toggle Button Component
 */
import React from 'react'



class Button extends React.Component
{
    /**
     * This constructor will be the starting point of evry object. (whenevr an object will be made)
     * 
     * After this, render method will be called to render the properties on screen
     */
    constructor(props)
    {
        super(props) // passing all props to base class
        
        // defining some default states for the object
        this.state = {
            buttonState: true,
            class: 'btn btn-success'
        }

        // binding 'this' with the method
        this.toggleButton = this.toggleButton.bind(this)
        /**
         * To not use bind, change :
         * onClick = {() => this.toggleButton()} in render method
         * This syntax ensures 'this' is bound within toggleButton
         */
    }

    toggleButton()
    {
        this.setState(prevState => ({
            buttonState: ! prevState.buttonState,
            class: prevState.buttonState ? 'btn btn-danger' : 'btn btn-success' 
        }))
    }


    // will be called each time an update happens
    render()
    {
        return (
            <button onClick={this.toggleButton} className={this.state.class}>
                {this.state.buttonState ? 'On' : 'Off'}
            </button>
        )
    }
}

export default Button