import {Link} from "react-router-dom";

import {FiUserPlus} from "react-icons/all";

import ROUTES from "../../../../../router/routes";

import * as buttonStyles from "../../../../common/components/Button/Button.module.scss";


const PublicNav = () =>
    <>
        <Link to={ROUTES.REGISTER} className={buttonStyles.commonButtonOrange}>
            <FiUserPlus /> Register
        </Link>

        <Link to={ROUTES.LOGIN} className={buttonStyles.commonButtonGray}>
            Login
        </Link>
    </>

export default PublicNav;
