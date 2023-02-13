import React, {FormEventHandler, ReactNode} from "react";

import Button, {ButtonProps} from "../Button/Button";
import {primaryOrange, primaryDanger} from "../Button/Button.module.scss";

import getInputError from "./utils/getInputError";

import * as styles from "./Form.module.scss";


interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>{
    children: ReactNode;
    onSubmit: FormEventHandler;
    maxWidth?: number;
    minWidth?: number;
    center?: boolean;
}

interface FormTextProps {
    children: ReactNode;
}
const Form = ({ children, onSubmit, maxWidth, minWidth, center }: FormProps) => {

    return (
        <form
            className={styles.form}
            style={{
                maxWidth: maxWidth ? maxWidth + "em" : undefined,
                minWidth: minWidth ? minWidth + "em" : undefined,
                marginInline: center ? "auto" : undefined,
            }}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
}


Form.Title = function FormTitle({ children }: FormTextProps) {
    return (
        <h2
            className={styles.formTitle}
        >
            {children}
        </h2>
    )
}

Form.Text = function FormText({children}: FormTextProps) {
    return (
        <p
            className={styles.formText}
        >
            {children}
        </p>
    )
}

interface TextInputValidatedProps {
    touched: boolean;
    errors: string[];
    children: ReactNode;
}

Form.TextInputValidated = function FormTextFieldValidated({children, errors, touched}: TextInputValidatedProps) {

    const inputErrorItems = getInputError(errors, touched);

    return (
        <div className={styles.formInputValidatedContainer}>
            {children}
            <div className={styles.formInputErrorsContainer}>
                {inputErrorItems}
            </div>
        </div>
    )
}

interface ControlsProps {
    children: ReactNode;
}

Form.Controls = function FormControls({ children }: ControlsProps) {
    return (
        <div className={styles.formControls}>
            {children}
        </div>
    )
}

interface FormButtonProps extends ButtonProps {
    fullWidth?: boolean;
}

Form.SubmitButton = function FormSubmitButton({children, className = primaryOrange, fullWidth, ...props}: FormButtonProps) {
    return (
        <Button
            style={{ width: fullWidth ? "100%" : undefined, flexGrow: fullWidth ? "1" : undefined }}
            className={className}
            type="submit"
            {...props}
        >
            {children}
        </Button>
    )
}

Form.DeclineButton = function FormDeclineButton({children, className = primaryDanger, fullWidth, ...props}: FormButtonProps) {
    return (
        <Button
            style={{ width: fullWidth ? "100%" : undefined, flexGrow: fullWidth ? "1" : undefined }}
            className={className}
            {...props}
        >
            {children}
        </Button>
    )
}

interface FormErrorProps {
    error: string | null;
}

Form.Error = function FormError({ error }: FormErrorProps) {
    return error ?
        <p className={styles.formError}>
            {error}
        </p> :
        null;
}

export default Form;