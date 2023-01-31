import React from 'react'
import "./Input.css"

export interface InputProps {
    label?: string;
    className: string;
    backgroundColor?: string;
    color?: string;
    typeText?: boolean;
}

const Input = (props: InputProps) => {
    return (
        <>
            <input
                type={props.typeText === true ? 'text' : 'textarea'}
                className={props.className}
            />
        </>
    );
}

export default Input