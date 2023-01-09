import {ChangeEvent, FormEvent, useState} from "react";

import Button from "../../common/components/Button/Button";
import {commonButtonOrange} from "../../common/components/Button/Button.module.scss";

import Input from "../../common/components/Input/Input";
import { inputOutlined } from "../../common/components/Input/Input.module.scss";

import RegisterImage from "../../assets/RegisterImage.jpg";

import * as authStyles from "../../common/styles/Auth.module.scss";

function RegisterPage() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        const registerCredentials = {
            username,
            email,
            password
        }

        console.log(registerCredentials);
    };

    const handleUsernameChange = (event: ChangeEvent) => {
        setUsername((event.target as HTMLInputElement).value);
    }

    const handleEmailChange = (event: ChangeEvent) => {
        setEmail((event.target as HTMLInputElement).value);
    }

    const handlePasswordChange = (event: ChangeEvent) => {
        setPassword((event.target as HTMLInputElement).value);
    }

    const handlePasswordRepeatChange = (event: ChangeEvent) => {
        setPasswordRepeat((event.target as HTMLInputElement).value);
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
                        Join Alem community
                    </h2>
                    <p
                        className={authStyles.authFormText}
                    >
                        Get more features and privileges by joining to the most helpful community
                    </p>

                    <fieldset className={authStyles.authFormButtonFieldset}>
                        <Input
                            className={inputOutlined}
                            value={username}
                            labelText="Username"
                            onChange={handleUsernameChange}
                        />
                        <Input
                            className={inputOutlined}
                            value={email}
                            labelText="Email"
                            onChange={handleEmailChange}
                        />
                        <Input
                            className={inputOutlined}
                            value={password}
                            labelText="Password"
                            onChange={handlePasswordChange}
                            type="password"
                        />
                        <Input
                            className={inputOutlined}
                            value={passwordRepeat}
                            labelText="Repeat password"
                            onChange={handlePasswordRepeatChange}
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
                        REGISTER
                    </Button>

                </form>
            </div>

            <div className={authStyles.authImageContainer}>
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
