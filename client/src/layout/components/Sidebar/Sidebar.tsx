import {ChangeEvent, useState} from "react";

import {useAppSelector} from "../../../hooks/redux";
import {selectIsAuth} from "../../../store/user/user.selectors";

import SearchBar from "../../../components/SearchBar/SearchBar";

import PublicSidebarLinks from "./components/PublicSidebarLinks/PublicSidebarLinks";
import UserSidebarLinks from "./components/UserSibedarLinks/UserSidebarLinks";


import * as styles from "./Sidebar.module.scss";


function Sidebar() {
    const isAuth = useAppSelector(selectIsAuth);

    const userSidebarLinks = isAuth &&
                            <UserSidebarLinks />;

    return (
        <nav className={styles.sidebar}>
            <SearchBar />

            <PublicSidebarLinks />

            {userSidebarLinks}
        </nav>
    );
}

export default Sidebar;
