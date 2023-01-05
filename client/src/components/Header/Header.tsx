import Logo from './components/Logo/Logo';

import * as styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerLogo}>
                    <Logo />
                    <div>
                        <strong>Alem</strong>help
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
