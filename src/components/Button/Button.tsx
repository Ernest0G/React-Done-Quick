import React from 'react'
import "./Button.css"
import "../../Index.css"

export interface ButtonProps {
    label?: string;
    className: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    iconPath?: string;
    fontSize?: string;
    width?: string;
}

const Button = (props: ButtonProps) => {
    return (
        <button
            type='button'
            className={props.className}
            style={{
                backgroundColor: props.backgroundColor,
                borderColor: props.borderColor,
                color: props.textColor,
                fontSize: props.fontSize,
                width: props.width
            }}
        >
            {props.iconPath && <img src={`${props.iconPath}`} />}
            {props.label && props.label}
        </button >
    )
}

export default Button