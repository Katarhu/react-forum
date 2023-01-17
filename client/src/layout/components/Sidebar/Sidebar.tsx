import {ChangeEvent, useState} from "react";

import {useAppSelector} from "../../../hooks/redux";
import {selectIsAuth} from "../../../store/user/user.selectors";

import Input from "../../../common/components/Input/Input";
import {inputLinedOnFocus} from "../../../common/components/Input/Input.module.scss";

import {FiSearch} from "react-icons/fi";

import PublicSidebarLinks from "./components/PublicSidebarLinks/PublicSidebarLinks";
import UserSidebarLinks from "./components/UserSibedarLinks/UserSidebarLinks";


import * as styles from "./Sidebar.module.scss";


function Sidebar() {
    const [query, setQuery] = useState('');
    const isAuth = useAppSelector(selectIsAuth);

    const handleQueryChanges = (event: ChangeEvent) => {
        setQuery((event.target as HTMLInputElement).value)
    }

    const userSidebarLinks = isAuth &&
                            <UserSidebarLinks />;

    return (
        <nav className={styles.sidebar}>
            <div className={styles.sidebarSearchContainer}>
                <FiSearch className={styles.sidebarSearchIcon} />
                <Input
                    value={query}
                    onChange={handleQueryChanges}
                    labelText="Search"
                    className={inputLinedOnFocus}
                />
            </div>

            <PublicSidebarLinks />

            {userSidebarLinks}
        </nav>
    );
}

export default Sidebar;
