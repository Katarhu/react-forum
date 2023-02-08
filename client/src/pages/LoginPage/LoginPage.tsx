import {FormEvent} from "react";

import useOnUnmount from "../../hooks/useOnUnmount";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import {useInput} from "../../hooks/useInput";

import {ILoginCredentials} from "../../models/login.model";

import Form from "../../common/components/Form/Form";
import {PasswordTextField, TextField} from "../../common/components/Input/Input";

import {loginUser} from "../../store/user/user.action.creators";
import {clearAuthError} from "../../store/user/user.slice";

import {selectAuthError} from "../../store/user/user.selectors";

import LoginImage from "../../assets/LoginImage.jpg";

import * as authStyles from '../../common/styles/Auth.module.scss';


function LoginPage() {
    const username = useInput('', {minLength: 3, maxLength: 30, required: true});
    const password = useInput('', {minLength: 3, maxLength: 30, required: true});

    const loginError = useAppSelector(selectAuthError);

    const dispatch = useAppDispatch();

    useOnUnmount(() => {
        if (loginError) dispatch(clearAuthError());
    });

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!isFormValid) return;

        const loginCredentials: ILoginCredentials = {
            username: username.value,
            password: password.value
        }

        dispatch(loginUser(loginCredentials));
    };

    const isFormValid = [username.isValid, password.isValid].every(Boolean);

    return (
        <div className={authStyles.auth}>
            <div className={authStyles.authFormContainer}>
                <Form
                    onSubmit={handleFormSubmit}
                    maxWidth={520}
                >
                    <Form.Title>
                        We’ve missed you!
                    </Form.Title>

                    <Form.Text>
                        More than 150 questions are waiting for your wise suggestions!
                    </Form.Text>

                    <Form.TextInputValidated
                        {...username}
                    >
                        <TextField
                            value={username.value}
                            onChange={username.onChange}
                            onBlur={username.onBlur}
                            labelText="Username"
                        />
                    </Form.TextInputValidated>

                    <Form.TextInputValidated
                        {...password}
                    >
                        <PasswordTextField
                            value={password.value}
                            onChange={password.onChange}
                            onBlur={password.onBlur}
                            labelText="Password"
                        />
                    </Form.TextInputValidated>

                    <Form.Error error={loginError}/>

                    <Form.Controls>
                        <Form.SubmitButton fullWidth disabled={!isFormValid}>
                            Login
                        </Form.SubmitButton>
                    </Form.Controls>
                </Form>

            </div>

            <div className={authStyles.authImageContainer}>
                <div className={authStyles.authImageScreen}></div>
                <img
                    className={authStyles.authImage}
                    src={LoginImage}
                    draggable={false}
                    alt="Alemhelp authentication photo"
                />
            </div>
        </div>
    );
}

export default LoginPage;
