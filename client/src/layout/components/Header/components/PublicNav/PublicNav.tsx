import {Link} from "react-router-dom";

import {FiUserPlus} from "react-icons/all";

import ROUTES from "../../../../../router/routes";

import {primaryOrange, primaryGray} from "../../../../../common/components/Button/Button.module.scss";


const PublicNav = () =>
    <>
        <Link to={ROUTES.REGISTER} className={primaryOrange}>
            <FiUserPlus /> Register
        </Link>

        <Link to={ROUTES.LOGIN} className={primaryGray}>
            Login
        </Link>
    </>

export default PublicNav;
