import * as styles from './Menu.module.scss';
import {createRef, ReactNode} from 'react';
import {MenuContextProvider, useMenu} from "./context/MenuContext";
import useClickOutside from "../../../hooks/useClickOutside";

interface MenuProps {
    children: ReactNode;
}

const Menu = ({ children }: MenuProps) => {
    return (
        <MenuContextProvider>
            <div className={styles.menuContainer}>
                {children}
            </div>
        </MenuContextProvider>
    );
};

interface MenuBodyProps {
    children: ReactNode;
    flex?: boolean;
    column?: boolean;
    gap?: number;
}

Menu.Body = ({ children, flex, column, gap }: MenuBodyProps) => {
    return (
        <div
            className={styles.menuBody}
            style={{
                display: flex ? "flex" : undefined,
                flexDirection: column ? "column" : undefined,
                gap: gap ?  gap + "em" : undefined,
            }}
        >
            {children}
        </div>
    )
}

interface MenuToggleProps {
    children: ReactNode;
}

Menu.Toggle = ({ children }: MenuToggleProps) => {

    const {handleToggle} = useMenu();

    return (
        <button
            className={styles.menuToggle}
            onClick={handleToggle}
        >
            {children}
        </button>
    )
}

interface MenuToggleIconProps {
    size?: number;
}

Menu.ToggleIcon = ({ size }: MenuToggleIconProps) => {
    return (
        <span
            className={styles.menuToggleIcon}
            style={{
                fontSize: size ? size + "em" : undefined,
            }}
        >
            ▼
        </span>
    )
}

interface MenuDropdownProps {
    children: ReactNode;
}

Menu.Dropdown = ({ children }: MenuDropdownProps) => {
    const menuRef = createRef<HTMLUListElement>();
    const {isOpen, handleClose} = useMenu();

    useClickOutside(menuRef, handleClose);

    return isOpen ?
        <ul
            className={styles.menuDropdown}
            ref={menuRef}
            role="menu"
        >
            {children}
        </ul>
        :
        null;
}

interface MenuDropdownItemProps {
    children: ReactNode;
}

Menu.DropdownItem = ({ children }: MenuDropdownItemProps) => {
    return (
        <li
            className={styles.menuDropdownItem}
            role="menuitem"
        >
            {children}
        </li>
    )
}

Menu.DropdownDivider = () => {
    return (
        <hr className={styles.menuDropdownDivider}/>
    )
}


export default Menu;