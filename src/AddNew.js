import React from 'react'
import { render } from 'react-dom'


function AddNew()
{
    constructor(props)
    {
        super(props)
        this.state = {buttonState: true}
    }



    render()
    {
        return (
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h5 className="modal-title"> Create new Task </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            {/* Modal Body */}
                            <div className="modal-body">
                                <form>
                                    <label htmlFor="taskName">Item :</label>
                                    <input type="text" placeholder="Your Task" name="taskName" id="taskName">
                                        <button type="submit" id="submit" name="submit">Send</button>
                                    </input>
                                </form>
                            </div>
                            {/* Modal Footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default AddNew