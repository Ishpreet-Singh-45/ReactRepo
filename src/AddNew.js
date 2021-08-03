import React from 'react'


const AddNew = () => 
{
    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">
                            Create new Task
                        </div>
                        <div className="modal-body">
                            <form>
                                <label htmlFor="taskName">Item :</label>
                                <input type="text" placeholder="Your Task" name="taskName" id="taskName">
                                    <button type="submit" id="submit" name="submit">Send</button>
                                </input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNew