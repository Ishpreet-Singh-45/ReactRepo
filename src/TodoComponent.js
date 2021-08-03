import React from 'react';

const TodoComponent = (props) =>
{
    return (
        <li>
            <p className="text-dark">
                {props.title}
            <i className="ms-5 bi bi-eye text-primary"></i>
            <i className="ms-3 bi bi-trash text-danger"></i>
            </p>
            <ul>
                for(item in props.description)
                    <p className="text-secondary" style={{fontSize: '1rem'}}>
                        {props.description.}
                    </p>
            </ul>
            
        </li>
    )
    
}

export default TodoComponent