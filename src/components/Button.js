/**
 * Toggle Button Component
 */
import React from 'react'




class Button extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            buttonState: true,
            class: 'btn btn-success'
        }
        this.toggleButton = this.toggleButton.bind(this)
        /**
         * To not use bind, change :
         * onclick = {() => this.toggleButton()}
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