import {memo} from "react";

import {useAppSelector} from "../../../hooks/redux";
import {selectIsAuth} from "../../../store/user/user.selectors";

import {AppLink} from "../../../common/components/Button/Button";

import Logo from './components/Logo/Logo';

import PublicNav from "./components/PublicNav/PublicNav";
import AuthNav from "./components/AuthNav/AuthNav";

import ROUTES from "../../../router/constants/routes";

import * as styles from './Header.module.scss';


function Header() {

    const isAuth = useAppSelector(selectIsAuth);

    const navContent = isAuth ?
        <AuthNav /> :
        <PublicNav />

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <AppLink to={ROUTES.QUESTIONS} className={styles.headerLogo}>
                    <Logo />
                    <div>
                        alem<b>help</b>
                    </div>
                </AppLink>

                <nav className={styles.headerControls}>
                    {navContent}
                </nav>
            </div>
        </header>
    );
}

export default memo(Header);
