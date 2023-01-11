import Logo from './components/Logo/Logo';

import { FiUserPlus } from 'react-icons/all';

import * as buttonStyles from '../../common/components/Button/Button.module.scss';
import * as styles from './Header.module.scss';

import ROUTES from "../../router/routes";

import {Link} from "react-router-dom";


function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to={ROUTES.HOME} className={styles.headerLogo}>
                    <Logo />
                    <div>
                        alem<b>help</b>
                    </div>
                </Link>

                <div className={styles.headerControls}>
                    <Link to={ROUTES.REGISTER} className={buttonStyles.commonButtonOrange}>
                        <FiUserPlus /> Register
                    </Link>

                    <Link to={ROUTES.LOGIN} className={buttonStyles.commonButtonGray}>
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
