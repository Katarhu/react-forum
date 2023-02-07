import React, {createRef, useRef} from "react";
import {Link} from "react-router-dom";

import useClickOutside from "../../../../../../../../../hooks/useClickOutside";

import {logout} from "../../../../../../../../../store/user/user.slice";
import {useAppDispatch} from "../../../../../../../../../hooks/redux";

import {FiLogOut} from "react-icons/fi";

import {environment} from "../../../../../../../../../environment";

import ROUTES from "../../../../../../../../../router/routes";

import {commonButton} from "../../../../../../../../../common/components/Button/Button.module.scss";
import * as styles from "../../UserControls.module.scss";


interface MenuProps {
    onClose: () => void;
}

function UserMenu({ onClose }: MenuProps) {
    const menuRef = createRef<HTMLUListElement>();
    const dispatch = useAppDispatch();

    useClickOutside(menuRef, onClose);

    const handleUserLogout = () => {
        dispatch(logout());
        window.localStorage.removeItem(environment.tokenKey);
    }

    return (
        <ul ref={menuRef} className={styles.menu}>
            <li className={styles.menuItem}>
                <Link to={ROUTES.PROFILE} className={styles.menuItemButton}>
                    My profile
                </Link>
            </li>
            <li className={styles.menuItemLogout}>
                <button
                    onClick={handleUserLogout}
                    className={[commonButton, styles.menuItemButton].join(' ')}
                >
                    <FiLogOut /> Logout
                </button>
            </li>
        </ul>
    );
}

export default UserMenu;
