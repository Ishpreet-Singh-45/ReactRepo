/**
 * 
 * Component of Calculator App
 * 
 */
import React from 'react'



class Calculator extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    heading()
    {
        this.setState({
            title: 'Calculator '
        })
    }
}