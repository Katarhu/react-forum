import Logo from './components/Logo/Logo';
import Button from '../../common/components/Button/Button';

import { FiUserPlus } from 'react-icons/all';

import * as buttonStyles from '../../common/components/Button/Button.module.scss';
import * as styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>
                    <Logo />
                    <div>
                        alem<b>help</b>
                    </div>
                </div>

                <div className={styles.headerControls}>
                    <Button className={buttonStyles.commonButtonOrange}>
                        <FiUserPlus /> Register
                    </Button>

                    <Button className={buttonStyles.commonButtonGray}>
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
