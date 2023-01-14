import {Link} from "react-router-dom";

import {FiUserPlus} from "react-icons/all";

import ROUTES from "../../../../../router/routes";

import {commonButtonOrange, commonButtonGray} from "../../../../../common/components/Button/Button.module.scss";


const PublicNav = () =>
    <>
        <Link to={ROUTES.REGISTER} className={commonButtonOrange}>
            <FiUserPlus /> Register
        </Link>

        <Link to={ROUTES.LOGIN} className={commonButtonGray}>
            Login
        </Link>
    </>

export default PublicNav;
