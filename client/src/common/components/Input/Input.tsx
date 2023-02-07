import React, {ChangeEventHandler, FocusEventHandler, memo, useId, useState} from "react";

import * as styles from "./Input.module.scss";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/all";
import useBooleanToggle from "../../../hooks/useBooleanToggle";

export interface TextFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string | number;
    onChange: ChangeEventHandler;
    onBlur?: FocusEventHandler;
    labelText?: string;

}
export const TextField = memo(({labelText, placeholder=" ", className, type,...props}: TextFieldProps) => {

    const id = useId();

    const label = labelText ?
        <label className={styles.label} htmlFor={id}>{labelText}</label> :
        null;

    return (
        <div className={styles.inputContainer}>
            <input
                id={id}
                className={className ? className : styles.inputOutlined}
                type={type ? type : "text"}
                placeholder={placeholder}
                {...props}
            />
            {label}
        </div>
    )
})

export const PasswordTextField = memo(({labelText, placeholder=" ", className, ...props}: TextFieldProps) => {

    const [isToggled, toggle] = useBooleanToggle(false);

    const id = useId();

    const toggleIcon = isToggled ? <AiOutlineEyeInvisible /> : <AiOutlineEye />

    const label = labelText ?
        <label className={styles.label} htmlFor={id}>{labelText}</label> :
        null;

    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputPasswordContainer}>
                <input
                    id={id}
                    className={className ? className : styles.inputOutlinedPassword}
                    type={isToggled ? "text" : "password" }
                    placeholder={placeholder}
                    {...props}
                />
                <button
                    onClick={toggle}
                    type="button"
                    className={styles.inputToggle}
                >
                    {toggleIcon}
                </button>
            </div>

            {label}
        </div>
    )
})

export function TextArea() {

}