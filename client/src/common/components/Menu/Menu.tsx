import * as styles from './Menu.module.scss';
import {ReactNode} from 'react';

interface MenuProps {
    children: ReactNode;
}

const Menu = ({ children }: MenuProps) => {
    return (
        <div className={styles.menuContainer}>
            {children}
        </div>
    );
};

interface MenuBodyProps {
    children: ReactNode;
}

Menu.Body = ({ children }: MenuBodyProps) => {
    return (
        <div className={styles.menuBody}>
            {children}
        </div>
    )
}

interface MenuDropdownProps {

}

Menu.Dropdown = () => {
    return (
        <div></div>
    )
}

interface MenuDropdownProps {

}

Menu.DropdownItem = () => {
    return (
        <div></div>
    )
}

Menu.Toggle = () => {
    return (
        <div></div>
    )
}

Menu.ToggleIcon = () => {
    return (
        <div></div>
    )
}


export default Menu;