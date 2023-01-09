import {ChangeEvent, memo, useId} from "react";

import * as styles from './Input.module.scss';

interface InputProps {
    type?: "text" | "email" | "number" | "password";
    onBlur?: () => void;
    onChange: (event: ChangeEvent) => void;
    value: string | number;
    labelText: string;
    className?: string;
}


function Input({ type = "text", onBlur, onChange, value, labelText, className = styles.inputLined }: InputProps) {

    const id = useId();

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
            />
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
