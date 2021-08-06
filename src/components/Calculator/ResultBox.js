/**
 * 
 * Component of Calculator App
 * 
 */
import React from 'react'



class ResultBox extends React.Component
{
    /**
     * renders only the result box
     */
    render()
    {
        let result = this.props.result

        return (
            <div className="d-flex justify-content-center position-relative">
                <p className="mt-5 text-end alert alert-secondary text-muted p-0" id="equation" style={{width: '500px', minHeight: '40px', fontSize: '1.5rem'}}>
                    {result}
                </p>
            </div>
        )
    }
}



export default ResultBox