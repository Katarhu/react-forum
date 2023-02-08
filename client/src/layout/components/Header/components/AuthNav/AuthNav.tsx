import {Link} from "react-router-dom";

import ROUTES from "../../../../../router/routes";

import {primaryOrange} from "../../../../../common/components/Button/Button.module.scss";

import {BiMessageRoundedAdd} from "react-icons/bi"

import NotificationIcon from "./components/NotificationIcon/NotificationIcon";

import UserControls from "./components/UserControls/UserControls";


function AuthNav() {

    return (
        <>
            <Link to={ROUTES.ADD_QUESTION} className={primaryOrange}>
                <BiMessageRoundedAdd/> Ask a question
            </Link>

            <NotificationIcon />

            <UserControls />
        </>
    );
}

export default AuthNav;
