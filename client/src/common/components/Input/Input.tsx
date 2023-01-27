import React, {ChangeEvent, memo, useId} from "react";

import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai";

import * as styles from './Input.module.scss';

interface InputProps {
    type?: "text" | "email" | "number" | "password";
    onBlur?: () => void;
    onChange: (event: ChangeEvent) => void;
    showToggle?: boolean;
    onToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isToggled?: boolean;
    value: string | number;
    labelText: string;
    className?: string;
    autoComplete?: string;
}


function Input({ type = "text", onBlur, onChange, value, labelText, className = styles.input, autoComplete="alemhelp input", showToggle, isToggled, onToggle}: InputProps) {

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
                placeholder={' '}
                onChange={onChange}
                value={value.toString()}
                autoComplete={autoComplete}
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
