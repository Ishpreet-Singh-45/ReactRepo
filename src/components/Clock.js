/**
 * Component For Displaying Time in the far right corner
 */

import React from 'react'


class Clock extends React.Component
{
    /**
     * To use this class with specific properties passed from the object call
     * 
     * replace 'this.state' with 'this.props.date'
     * 
     * @param {props}: properties of the class
     */
    constructor(props)
    {
        super(props) // providing properties to base class
        this.state = {date: new Date()}// setting a new Date State

        /**
         * State is similar to properties, but is private and fully controlled by component
         */
    }

    // render the component
    render()
    {
        return (
            <span className="text-secondary">
                Today &nbsp;&nbsp;
                {this.state.date.toLocaleString()}
            </span>
        )
    }

    tick()
    {
        this.setState({
            date: new Date()
        })
    }

    // runs after the component output has been rendered to DOM
    componentDidMount()
    {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    // runs when the component has stop rendering to DOM
    componentWillUnmount()
    {
        clearInterval(this.timerID)
    }
   
}
export default Clock