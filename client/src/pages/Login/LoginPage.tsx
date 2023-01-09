import {ChangeEvent, FormEvent, useState} from "react";

import Button from "../../common/components/Button/Button";
import { commonButtonOrange } from '../../common/components/Button/Button.module.scss';

import Input from "../../common/components/Input/Input";
import {} from "../../common/components/Input/Input.module.scss";

import LoginImage from "../../assets/LoginImage.jpg";

import * as authStyles from '../../common/styles/Auth.module.scss';
import './LoginPage.scss';



function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        const loginCredentials = {
            username,
            password
        }

        console.log(loginCredentials);
    };

    const handleUsernameChange = (event: ChangeEvent) => {
        setUsername((event.target as HTMLInputElement).value);
    }

    const handlePasswordChange = (event: ChangeEvent) => {
        setPassword((event.target as HTMLInputElement).value);
    }

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

                    <fieldset className={authStyles.authFormButtonFieldset}>
                        <Input
                            value={username}
                            labelText="Username"
                            onChange={handleUsernameChange}
                        />
                        <Input
                            value={password}
                            labelText="Password"
                            onChange={handlePasswordChange}
                            type="password"
                        />
                    </fieldset>

                    <p className={authStyles.authFormError}>
                        Wrong password!
                    </p>

                    <Button
                        className={commonButtonOrange}
                        type="submit"
                    >
                        Login
                    </Button>

                </form>
            </div>

            <div className={authStyles.authImageContainer}>
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
