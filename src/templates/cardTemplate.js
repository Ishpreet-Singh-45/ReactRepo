import React from 'react';
import tasks from './tasks';

function TodoComponent(props)
{
    return (
        <li>
            <p className="text-dark" style={{fontSize: '1.3rem'}}>
                {props.title}
            <i className="ms-5 bi bi-eye text-primary"></i>
            <i className="ms-3 bi bi-trash text-danger"></i>
            </p>
            <ul>
                    <p className="text-secondary" style={{fontSize: '1rem', marginTop: '-.7%'}} >
                        {props.description}
                    </p>
            </ul>
            
        </li>
    )
    
}

const cardTemplate = tasks.map((item) =>
{
    return (
        <TodoComponent key={item.id} title={item.title} description={item.description} />
    )
})

export default cardTemplate