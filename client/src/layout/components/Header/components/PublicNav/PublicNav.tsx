import {AppLink} from "../../../../../common/components/Button/Button";

import {FiUserPlus} from "react-icons/all";

import {primaryOrange, primaryGray} from "../../../../../common/components/Button/Button.module.scss";

import ROUTES from "../../../../../router/routes";


const PublicNav = () =>
    <>
        <AppLink to={ROUTES.REGISTER} className={primaryOrange} rounded>
            <FiUserPlus /> Register
        </AppLink>

        <AppLink to={ROUTES.LOGIN} className={primaryGray} rounded>
            Login
        </AppLink>
    </>

export default PublicNav;
