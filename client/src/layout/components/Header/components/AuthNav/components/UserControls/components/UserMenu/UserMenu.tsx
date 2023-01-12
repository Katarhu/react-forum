import React, {useRef} from "react";
import {Link} from "react-router-dom";

import useClickOutside from "../../../../../../../../../hooks/useClickOutside";

import {FiLogOut} from "react-icons/fi";

import ROUTES from "../../../../../../../../../router/routes";

import {logoutButton} from "../../../../../../../../../common/components/Button/Button.module.scss";
import * as styles from "../../UserControls.module.scss";

interface MenuProps {
    onClose: () => void;
}

function UserMenu({ onClose }: MenuProps) {
    const menuRef = useRef<HTMLUListElement>(null);

    useClickOutside(menuRef.current, onClose);

    return (
        <ul ref={menuRef} className={styles.menu}>
            <li className={styles.menuItem}>
                <Link to={ROUTES.PROFILE}>
                    My profile
                </Link>
            </li>
            <li className={styles.menuItemLogout}>
                <button className={logoutButton}>
                    <FiLogOut /> Logout
                </button>
            </li>
        </ul>
    );
}

export default UserMenu;
