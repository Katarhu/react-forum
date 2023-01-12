import {Link} from "react-router-dom";

import Logo from './components/Logo/Logo';

import PublicNav from "./components/PublicNav/PublicNav";
import AuthNav from "./components/AuthNav/AuthNav";

import ROUTES from "../../../router/routes";

import * as styles from './Header.module.scss';
import {memo} from "react";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to={ROUTES.POSTS} className={styles.headerLogo}>
                    <Logo />
                    <div>
                        alem<b>help</b>
                    </div>
                </Link>

                <nav className={styles.headerControls}>
                    <AuthNav />
                    {/*<PublicNav />*/}
                </nav>
            </div>
        </header>
    );
}

export default memo(Header);
