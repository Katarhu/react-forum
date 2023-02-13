import UserMenu from "./components/UserMenu/UserMenu";

import NotificationIcon from "./components/NotificationIcon/NotificationIcon";

import {BiMessageRoundedAdd} from "react-icons/bi"

import {AppLink} from "../../../../../common/components/Button/Button";
import {primaryOrange} from "../../../../../common/components/Button/Button.module.scss";

import ROUTES from "../../../../../router/constants/routes";


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
