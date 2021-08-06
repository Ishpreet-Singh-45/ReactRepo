/**
 * 
 * Component for Login/Logout Button 
 * 
 */

import React from 'react'


class CountClicks extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            count: 0
        }
        this.countClicks = this.countClicks.bind(this)
        this.countReset = this.countReset.bind(this)
    }

    countClicks()
    {
        this.setState(prevState =>({
            count: prevState.count + 1
        }))
    }
    countReset()
    {
        this.setState(prevState => ({
            count: 0
        }))
    }

    render()
    {
        return (
            <div className="m-4">
                <button type="button" className="btn btn-success ms-3" onClick={this.countClicks} style={{fontSize: '1.5rem'}}>
                    count: {this.state.count}
                </button>
                <button type="button" className="btn btn-warning ms-2" onClick={this.countReset} style={{fontSize: '1rem'}}>
                    Reset
                </button>
                <br/>
                {this.state.count && <p> Messages: {this.state.count} </p>}
                {/* The above statement works because JS evaluates to expression when [true && expression]
                but evaluates to false when [false && expression] */}
            </div>
        )
    }
}


export default CountClicks