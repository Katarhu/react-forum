import React, {FormEvent, MouseEventHandler, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import {IRegisterCredentials} from "../../models/register.model";
import {registerUser} from "../../store/user/user.action.creators";
import {clearAuthError} from "../../store/user/user.slice";

import {useInput} from "../../hooks/useInput";

import getInputError from "../../common/components/InputError/utils/getInputError";

import Button from "../../common/components/Button/Button";
import { commonButtonOrange } from "../../common/components/Button/Button.module.scss";

import Input from "../../common/components/Input/Input";
import { inputOutlinedPlain, inputOutlinedWithToggle } from "../../common/components/Input/Input.module.scss";

import RegisterImage from "../../assets/RegisterImage.jpg";

import * as authStyles from "../../common/styles/Auth.module.scss";
import {selectAuthError} from "../../store/user/user.selectors";
import useOnUnmount from "../../hooks/useOnUnmount";


function RegisterPage() {

    const username = useInput('', { required: true, minLength: 3, maxLength: 30 });
    const email = useInput('', { required: true, minLength: 3, maxLength: 30, email: true });
    const password = useInput('', { required: true, minLength: 3, maxLength: 30 });
    const passwordRepeat = useInput('', { required: true, minLength: 3, maxLength: 30, password: password.value });

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowRepeatPassword, setIsShowRepeatPassword] = useState(false);

    const registerError = useAppSelector(selectAuthError);

    const dispatch = useAppDispatch();

    useOnUnmount(() => {
        if( registerError ) dispatch(clearAuthError());
    });


    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        const registerCredentials: IRegisterCredentials = {
            username: username.value,
            email: email.value,
            password: password.value
        };

        dispatch(registerUser(registerCredentials))
    };

    const togglePassword: MouseEventHandler = (event) => { event.preventDefault(); setIsShowPassword(prev => !prev)};
    const toggleRepeatPassword: MouseEventHandler = (event) => { event.preventDefault(); setIsShowRepeatPassword(prev => !prev)};

    const usernameErrors = getInputError(username.errors, username.touched);
    const emailErrors = getInputError(email.errors, email.touched);
    const passwordErrors = getInputError(password.errors, password.touched);
    const passwordRepeatErrors = getInputError(passwordRepeat.errors, passwordRepeat.touched);

    const passwordType = isShowPassword ? "text": "password";
    const passwordRepeatType = isShowRepeatPassword ? "text": "password";

    const isFormCorrect = [username.isValid, email.isValid, password.isValid, passwordRepeat.isValid].every(Boolean);

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
                        Join Alem community
                    </h2>
                    <p
                        className={authStyles.authFormText}
                    >
                        Get more features and privileges by joining to the most helpful community
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
                            className={inputOutlinedPlain}
                            value={email.value}
                            labelText="Email"
                            onChange={email.onChange}
                            onBlur={email.onBlur}
                            autoComplete="alemhelp email"
                        />

                        <div className={authStyles.authInputErrorsPlain}>
                            {emailErrors}
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
                            isToggled={isShowPassword}
                        />

                        <div className={authStyles.authInputErrorsShifted}>
                            {passwordErrors}
                        </div>
                    </fieldset>

                    <fieldset className={authStyles.authFormInputFieldset}>
                        <Input
                            className={inputOutlinedWithToggle}
                            value={passwordRepeat.value}
                            labelText="Repeat password"
                            onChange={passwordRepeat.onChange}
                            onBlur={passwordRepeat.onBlur}
                            type={passwordRepeatType}
                            autoComplete="alemhelp password"
                            showToggle={true}
                            onToggle={toggleRepeatPassword}
                            isToggled={isShowRepeatPassword}
                        />

                        <div className={authStyles.authInputErrorsShifted}>
                            {passwordRepeatErrors}
                        </div>
                    </fieldset>

                    <p className={authStyles.authFormError}>
                        {registerError}
                    </p>

                    <Button
                        className={commonButtonOrange}
                        type="submit"
                        disabled={!isFormCorrect}
                    >
                        REGISTER
                    </Button>

                </form>
            </div>

            <div className={authStyles.authImageContainer}>
                <div className={authStyles.authImageScreen}></div>
                <img
                    className={authStyles.authImage}
                    src={RegisterImage}
                    draggable={false}
                    alt="Alemhelp auhtentification photo"
                />
            </div>
        </div>
    );
}

export default RegisterPage;
