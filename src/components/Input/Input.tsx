import React from 'react'
import "./Input.css"
import "../../Index.css"

export interface InputProps {
    placeHolder?: string;
    className: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    fontSize?: string;
    width?: string;
}

const Input = (props: InputProps) => {
    return (
        <>
            <input
                className={props.className}
                placeholder={props.placeHolder}
                style={{
                    backgroundColor: props.backgroundColor,
                    borderColor: props.borderColor,
                    color: props.textColor,
                    fontSize: props.fontSize,
                    width: props.width
                }}
            />
        </>
    );
}

export default Input