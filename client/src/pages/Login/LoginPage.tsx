import {FormEvent} from "react";

import Button from "../../common/components/Button/Button";
import { commonButtonOrange } from '../../common/components/Button/Button.module.scss';

import Input from "../../common/components/Input/Input";
import {} from "../../common/components/Input/Input.module.scss";

import LoginImage from "../../assets/LoginImage.jpg";

import * as authStyles from '../../common/styles/Auth.module.scss';
import './LoginPage.scss';



function LoginPage() {

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

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

                    <fieldset className={authStyles.authFormFieldset}>
                        <Input />
                        <Input />
                    </fieldset>

                    <p className={authStyles.authFormError}>error</p>

                    <Button
                        className={commonButtonOrange}
                    >
                        Login
                    </Button>

                </form>
            </div>

            <div className={authStyles.authImageContainer}>
                <img
                    className={authStyles.authImage}
                    src={LoginImage}
                    alt="Alemhelp auhtentification photo"
                />
            </div>
        </div>
    );
}

export default LoginPage;
