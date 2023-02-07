import React, {FormEventHandler, ReactNode} from "react";

import * as styles from "./Form.module.scss";
import {TextField, TextFieldProps} from "../Input/Input";
import getInputError from "./utils/getInputError";

interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>{
    children: ReactNode;
    onSubmit: FormEventHandler;
}

interface FormTextProps {
    children: ReactNode;
}
const Form = ({ children, onSubmit }: FormProps) => {

    return (
        <form
            className={styles.form}
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

Form.Button = function FormButton() {

}

Form.Error = function FormError() {

}

export default Form;