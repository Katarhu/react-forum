import React, {FormEventHandler, ReactNode} from "react";

import * as styles from "./Form.module.scss";
import {TextField, TextFieldProps} from "../Input/Input";

interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>{
    children: ReactNode;
    onSubmit: FormEventHandler;
}

interface FormTextProps {
    children: ReactNode;
}
function Form({ children, onSubmit }: FormProps) {

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


Form.TextInputValidated = function FormTextFieldValidated(props: TextFieldProps) {
    return (
        <div>
            <TextField {...props}/>
        </div>
    )
}

Form.Button = function FormButton() {

}

Form.Error = function FormError() {

}

export default Form;