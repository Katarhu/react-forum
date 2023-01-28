import React, {ChangeEvent, ChangeEventHandler, memo, MouseEventHandler, useId} from 'react';

import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai";

import * as styles from './Input.module.scss';

interface InputDefaultProps {
    type?: "text" | "email" | "number" | "password";
    onBlur?: () => void;
    onChange: ChangeEventHandler;
    value: string | number;
    labelText?: string;
    className?: string;
    autoComplete?: string;
    placeholder?: string;
    disabled?: boolean;
}

interface InputToggleProps extends InputDefaultProps {
    showToggle: true;
    isToggled: boolean;
    onToggle: MouseEventHandler;
}

interface InputWithoutToggleProps extends InputDefaultProps {
    showToggle?: undefined;
    isToggled?: undefined;
    onToggle?: undefined;
}

type InputProps =  InputToggleProps | InputWithoutToggleProps;

function Input({ type = "text", onBlur, onChange, value, placeholder=" ", labelText, className = styles.input, autoComplete="alemhelp input", showToggle, isToggled, onToggle, disabled}: InputProps) {

    const id = useId();

    const toggleIcon = isToggled ? <AiOutlineEyeInvisible /> : <AiOutlineEye />

    const toggle = showToggle ?
        <button
            onClick={onToggle}
            type="button"
            className={styles.inputToggle}
        >
            {toggleIcon}
        </button>
        :
        undefined;

    return (
        <div className={styles.inputContainer}>
            <input
                className={className}
                id={id}
                type={type}
                onBlur={onBlur}
                placeholder={placeholder}
                onChange={onChange}
                value={value.toString()}
                autoComplete={autoComplete}
                disabled={disabled}
            />

            {toggle}

            <label
                className={styles.label}
                htmlFor={id}
            >
                {labelText}
            </label>
        </div>
    );
}

export default memo(Input);
