import React, {ChangeEventHandler, FormEvent, useState} from "react";

import useOnUnmount from "../../hooks/useOnUnmount";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import {useInput} from "../../hooks/useInput";

import {ILoginCredentials} from "../../models/login.model";

import {loginUser} from "../../store/user/user.action.creators";
import {clearAuthError} from "../../store/user/user.slice";

import {selectAuthError} from "../../store/user/user.selectors";

import getInputError from "../../common/components/InputError/utils/getInputError";

import Button from "../../common/components/Button/Button";
import { commonButtonOrange } from '../../common/components/Button/Button.module.scss';


import LoginImage from "../../assets/LoginImage.jpg";

import * as authStyles from '../../common/styles/Auth.module.scss';
import Form from "../../common/components/Form/Form";
import {TextField} from "../../common/components/Input/Input";


function LoginPage() {

    const username = useInput('', { minLength: 3, maxLength: 30, required: true });
    const password = useInput('', { minLength: 3, maxLength: 30, required: true });

    const [isPasswordToggled, setIsPasswordToggled] = useState(false);

    const loginError = useAppSelector(selectAuthError);

    const dispatch = useAppDispatch();


    useOnUnmount(() => {
        if( loginError ) dispatch(clearAuthError());
    });


    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        const loginCredentials: ILoginCredentials = {
            username: username.value,
            password: password.value
        }

        dispatch(loginUser(loginCredentials));
    };

    const togglePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsPasswordToggled((prev) => !prev);
    };


    const usernameErrors = getInputError(username.errors, username.touched);
    const passwordErrors = getInputError(password.errors, password.touched);
    const passwordType = isPasswordToggled ? "text" : "password";

    const isFormValid = [username.isValid, password.isValid].every(Boolean);

    const [value, setValue] = useState("");
    const onChange: ChangeEventHandler = (event) => {
        setValue((event.target as HTMLInputElement).value);
    }

    return (
        <div className={authStyles.auth}>
            <div className={authStyles.authFormContainer}>

                <Form onSubmit={handleFormSubmit}>
                    <Form.Title>
                        We’ve missed you!
                    </Form.Title>
                    <Form.Text>
                        More than 150 questions are waiting for your wise suggestions!
                    </Form.Text>

                    <TextField
                        placeholderText="Username"
                        value={value}
                        onChange={onChange}
                    />

                    <TextField
                        placeholderText="Password"
                        type="password"
                        value={value}
                        onChange={onChange}
                    />

                </Form>


                {/*<form*/}
                {/*    className={authStyles.authForm}*/}
                {/*    onSubmit={onSubmit}*/}
                {/*>*/}
                {/*    <h2*/}
                {/*        className={authStyles.authFormTitle}*/}
                {/*    >*/}
                {/*        We’ve missed you!*/}
                {/*    </h2>*/}
                {/*    <p*/}
                {/*        className={authStyles.authFormText}*/}
                {/*    >*/}
                {/*        More than 150 questions are waiting for your wise suggestions!*/}
                {/*    </p>*/}

                {/*    <fieldset className={authStyles.authFormInputFieldset}>*/}
                {/*        <Input*/}
                {/*            className={inputOutlinedPlain}*/}
                {/*            value={username.value}*/}
                {/*            labelText="Username"*/}
                {/*            onChange={username.onChange}*/}
                {/*            onBlur={username.onBlur}*/}
                {/*            autoComplete="alemhelp username"*/}
                {/*        />*/}

                {/*        <div className={authStyles.authInputErrorsPlain}>*/}
                {/*            {usernameErrors}*/}
                {/*        </div>*/}
                {/*    </fieldset>*/}

                {/*    <fieldset className={authStyles.authFormInputFieldset}>*/}
                {/*        <Input*/}
                {/*            className={inputOutlinedWithToggle}*/}
                {/*            value={password.value}*/}
                {/*            labelText="Password"*/}
                {/*            onChange={password.onChange}*/}
                {/*            onBlur={password.onBlur}*/}
                {/*            type={passwordType}*/}
                {/*            autoComplete="alemhelp password"*/}
                {/*            showToggle={true}*/}
                {/*            onToggle={togglePassword}*/}
                {/*            isToggled={isPasswordToggled}*/}
                {/*        />*/}

                {/*        <div className={authStyles.authInputErrorsShifted}>*/}
                {/*            {passwordErrors}*/}
                {/*        </div>*/}
                {/*    </fieldset>*/}

                {/*    <p className={authStyles.authFormError}>*/}
                {/*        {loginError}*/}
                {/*    </p>*/}

                {/*    <Button*/}
                {/*        className={commonButtonOrange}*/}
                {/*        type="submit"*/}
                {/*        disabled={!isFormValid}*/}
                {/*    >*/}
                {/*        Login*/}
                {/*    </Button>*/}

                {/*</form>*/}
            </div>

            <div className={authStyles.authImageContainer}>
                <div className={authStyles.authImageScreen}></div>
                <img
                    className={authStyles.authImage}
                    src={LoginImage}
                    draggable={false}
                    alt="Alemhelp auhtentification photo"
                />
            </div>
        </div>
    );
}

export default LoginPage;
