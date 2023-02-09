import {Link} from "react-router-dom";

import ROUTES from "../../../../../router/routes";

import {primaryOrange} from "../../../../../common/components/Button/Button.module.scss";

import {BiMessageRoundedAdd} from "react-icons/bi"

import NotificationIcon from "./components/NotificationIcon/NotificationIcon";

import UserControls from "./components/UserControls/UserControls";
import {AppLink} from "../../../../../common/components/Button/Button";


function AuthNav() {

    return (
        <>
            <AppLink to={ROUTES.ADD_QUESTION} className={primaryOrange} rounded>
                <BiMessageRoundedAdd/> Ask a question
            </AppLink>

            <NotificationIcon />

            <UserControls />
        </>
    );
}

export default AuthNav;
