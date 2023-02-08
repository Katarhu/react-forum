import React, {FormEvent} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import {IRegisterCredentials} from "../../models/register.model";
import {registerUser} from "../../store/user/user.action.creators";
import {clearAuthError} from "../../store/user/user.slice";

import {useInput} from "../../hooks/useInput";

import Form from "../../common/components/Form/Form";
import {PasswordTextField, TextField} from "../../common/components/Input/Input";

import {selectAuthError, selectIsLoadingAuth} from "../../store/user/user.selectors";
import useOnUnmount from "../../hooks/useOnUnmount";

import RegisterImage from "../../assets/RegisterImage.jpg";

import * as authStyles from "../../common/styles/Auth.module.scss";


function RegisterPage() {
    const username = useInput('', { required: true, minLength: 3, maxLength: 30 });
    const email = useInput('', { required: true, minLength: 3, maxLength: 30, email: true });
    const password = useInput('', { required: true, minLength: 3, maxLength: 30 });
    const passwordRepeat = useInput('', { required: true, minLength: 3, maxLength: 30, password: password.value });

    const registerError = useAppSelector(selectAuthError);
    const isLoading = useAppSelector(selectIsLoadingAuth);

    const dispatch = useAppDispatch();

    useOnUnmount(() => {
        if( registerError ) dispatch(clearAuthError());
    });

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!isFormValid || isLoading) return;

        const registerCredentials: IRegisterCredentials = {
            username: username.value,
            email: email.value,
            password: password.value
        };

        dispatch(registerUser(registerCredentials))
    };

    const isFormValid = [username.isValid, email.isValid, password.isValid, passwordRepeat.isValid].every(Boolean);

    return (
        <div className={authStyles.auth}>
            <div className={authStyles.authFormContainer}>
                <Form
                    onSubmit={onSubmit}
                    maxWidth={520}
                >
                    <Form.Title>
                        Join Alem community
                    </Form.Title>

                    <Form.Text>
                        Get more features and privileges by joining to the most helpful community
                    </Form.Text>

                    <Form.TextInputValidated
                        {...username}
                    >
                        <TextField
                            labelText="Username"
                            onChange={username.onChange}
                            onBlur={username.onBlur}
                            value={username.value}
                        />
                    </Form.TextInputValidated>

                    <Form.TextInputValidated
                        {...email}
                    >
                        <TextField
                            labelText="Email"
                            onChange={email.onChange}
                            onBlur={email.onBlur}
                            value={email.value}
                        />
                    </Form.TextInputValidated>

                    <Form.TextInputValidated
                        {...password}
                    >
                        <PasswordTextField
                            labelText="Password"
                            onChange={password.onChange}
                            onBlur={password.onBlur}
                            value={password.value}
                        />
                    </Form.TextInputValidated>

                    <Form.TextInputValidated
                        {...passwordRepeat}
                    >
                        <PasswordTextField
                            labelText="Repeat password"
                            onChange={passwordRepeat.onChange}
                            onBlur={passwordRepeat.onBlur}
                            value={passwordRepeat.value}
                        />
                    </Form.TextInputValidated>

                    <Form.Error error={registerError}/>

                    <Form.Controls>
                        <Form.SubmitButton fullWidth disabled={!isFormValid}>
                            Register
                        </Form.SubmitButton>
                    </Form.Controls>
                </Form>
            </div>

            <div className={authStyles.authImageContainer}>
                <div className={authStyles.authImageScreen}></div>
                <img
                    className={authStyles.authImage}
                    src={RegisterImage}
                    draggable={false}
                    alt="Alemhelp authentication photo"
                />
            </div>
        </div>
    );
}

export default RegisterPage;
