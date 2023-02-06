import React, {ChangeEventHandler, FocusEventHandler, useId} from "react";

import * as styles from "./Input.module.scss";

export interface TextFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string | number;
    onChange: ChangeEventHandler;
    onBlur?: FocusEventHandler;
    placeholderText?: string;

}
export function TextField({placeholderText, className, type,...props}: TextFieldProps) {

    const id = useId();

    const label = placeholderText ?
        <label className={styles.label} htmlFor={id}>{placeholderText}</label> :
        null;

    return (
        <div className={styles.inputContainer}>
            <input
                id={id}
                className={className ? className : styles.inputOutlined}
                type={type ? type : "text"}
                placeholder=" "
                {...props}
            />
            {label}
        </div>
    )
}

export function PasswordTextField() {

}

export function TextArea() {

}