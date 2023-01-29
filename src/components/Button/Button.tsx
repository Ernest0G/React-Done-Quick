import React from 'react'
import "./Button.css"
//import "./index.css"

export interface ButtonProps {
    label: string;
    className: string;
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    size?: [number, number];
    theme?: string;
}

const Button = (props: ButtonProps) => {
    return (
        <button
            type='button'
            className={props.className}
            style={{
                backgroundColor: props.backgroundColor,
                borderColor: props.borderColor,
                color: props.color
            }}
        >
            {props.label}
        </button >
    )
}

export default Button