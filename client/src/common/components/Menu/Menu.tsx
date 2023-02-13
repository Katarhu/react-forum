import {createRef, MouseEventHandler, ReactNode, useState} from 'react';

import useClickOutside from "../../../hooks/useOnClickOutside";

import {MenuContext, useMenu} from "./context/MenuContext";

import * as styles from './Menu.module.scss';


interface MenuProps {
    children: ReactNode;
}

const Menu = ({ children }: MenuProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen: MouseEventHandler = (event) => {
        event.stopPropagation();
        setIsOpen(true);
    }

    const handleClose: MouseEventHandler = (event) => {
        event.stopPropagation();
        setIsOpen(false);
    }

    const handleToggle: MouseEventHandler = (event) => {
        event.stopPropagation();
        setIsOpen(prev => !prev)
    }

    const menuRef = createRef<HTMLDivElement>();

    useClickOutside(menuRef, handleClose, "mousedown");

    return (
        <MenuContext.Provider value={{
            isOpen,
            handleClose,
            handleOpen,
            handleToggle,
        }}>
            <div
                className={styles.menuContainer}
                ref={menuRef}
            >
                {children}
            </div>
        </MenuContext.Provider>
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
            aria-controls="primary-navigation"
            aria-label="menu"
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
    left?: boolean;
    center?: boolean;
    right?: boolean;
}

Menu.Dropdown = ({ children, right, left, center }: MenuDropdownProps) => {
    const {isOpen} = useMenu();

    const className = left ? styles.menuDropdownLeft :
                      right ? styles.menuDropdownRight :
                      center ? styles.menuDropdownCenter : styles.menuDropdownLeft;


    return isOpen ?
        <ul
            className={className}
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

    const {handleClose} = useMenu();

    return (
        <li
            className={styles.menuDropdownItem}
            onClick={handleClose}
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