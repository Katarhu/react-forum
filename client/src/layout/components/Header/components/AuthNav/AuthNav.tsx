import {Link} from "react-router-dom";

import ROUTES from "../../../../../router/routes";

import {primaryOrange} from "../../../../../common/components/Button/Button.module.scss";

import {BiMessageRoundedAdd} from "react-icons/bi"

import NotificationIcon from "./components/NotificationIcon/NotificationIcon";

import UserMenu from "./components/UserMenu/UserMenu";
import {AppLink} from "../../../../../common/components/Button/Button";


function AuthNav() {

    return (
        <>
            <AppLink to={ROUTES.ADD_QUESTION} className={primaryOrange}>
                <BiMessageRoundedAdd/> Ask a question
            </AppLink>

            <NotificationIcon />

            <UserMenu />
        </>
    );
}

export default AuthNav;
