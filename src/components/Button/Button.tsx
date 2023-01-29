import React from 'react'
import "./Button.css"
//import "./index.css"

export interface ButtonProps {
    label: string;
    className: string;
}

const Button = (props: ButtonProps) => {
    return (
        <button className={props.className}>{props.label}</button>
    )
}

export default Button