import React, {FormEvent, useEffect, useState} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import {ILoginCredentials} from "../../models/login.model";
import {loginUser} from "../../store/user/user.action.creators";
import {clearAuthError} from "../../store/user/user.slice";

import {selectAuthError} from "../../store/user/user.selectors";

import {useInput} from "../../hooks/useInput";

import getInputError from "../../common/components/InputError/utils/getInputError";

import Button from "../../common/components/Button/Button";
import { commonButtonOrange } from '../../common/components/Button/Button.module.scss';

import Input from "../../common/components/Input/Input";
import { inputOutlinedPlain, inputOutlinedWithToggle } from "../../common/components/Input/Input.module.scss";

import LoginImage from "../../assets/LoginImage.jpg";

import * as authStyles from '../../common/styles/Auth.module.scss';
import useOnUnmount from "../../hooks/useOnUnmount";


function LoginPage() {

    const username = useInput('', { minLength: 3, maxLength: 30, required: true });
    const password = useInput('', { minLength: 3, maxLength: 30, required: true });

    const [isPasswordToggled, setIsPasswordToggled] = useState(false);

    const loginError = useAppSelector(selectAuthError);

    const dispatch = useAppDispatch();


    useOnUnmount(() => {
        if( loginError ) dispatch(clearAuthError());
    });


    const onSubmit = (event: FormEvent) => {
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

    return (
        <div className={authStyles.auth}>
            <div className={authStyles.authFormContainer}>
                <form
                    className={authStyles.authForm}
                    onSubmit={onSubmit}
                >
                    <h2
                        className={authStyles.authFormTitle}
                    >
                        We’ve missed you!
                    </h2>
                    <p
                        className={authStyles.authFormText}
                    >
                        More than 150 questions are waiting for your wise suggestions!
                    </p>

                    <fieldset className={authStyles.authFormInputFieldset}>
                        <Input
                            className={inputOutlinedPlain}
                            value={username.value}
                            labelText="Username"
                            onChange={username.onChange}
                            onBlur={username.onBlur}
                            autoComplete="alemhelp username"
                        />

                        <div className={authStyles.authInputErrorsPlain}>
                            {usernameErrors}
                        </div>
                    </fieldset>

                    <fieldset className={authStyles.authFormInputFieldset}>
                        <Input
                            className={inputOutlinedWithToggle}
                            value={password.value}
                            labelText="Password"
                            onChange={password.onChange}
                            onBlur={password.onBlur}
                            type={passwordType}
                            autoComplete="alemhelp password"
                            showToggle={true}
                            onToggle={togglePassword}
                            isToggled={isPasswordToggled}
                        />

                        <div className={authStyles.authInputErrorsShifted}>
                            {passwordErrors}
                        </div>
                    </fieldset>

                    <p className={authStyles.authFormError}>
                        {loginError}
                    </p>

                    <Button
                        className={commonButtonOrange}
                        type="submit"
                        disabled={!isFormValid}
                    >
                        Login
                    </Button>

                </form>
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
