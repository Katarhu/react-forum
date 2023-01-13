import {ChangeEvent, useState} from "react";

import Input from "../../../common/components/Input/Input";
import {inputLinedOnFocus} from "../../../common/components/Input/Input.module.scss";

import {FiSearch} from "react-icons/fi";

import PublicSidebarLinks from "./components/PublicSidebarLinks/PublicSidebarLinks";
import UserSidebarLinks from "./components/UserSibedarLinks/UserSidebarLinks";


import * as styles from "./Sidebar.module.scss";

function Sidebar() {
    const [query, setQuery] = useState('');

    const handleQueryChanges = (event: ChangeEvent) => {
        setQuery((event.target as HTMLInputElement).value)
    }

    return (
        <nav className={styles.sidebar}>
            <div className={styles.sidebarSearchContainer}>
                <FiSearch />
                <Input
                    value={query}
                    onChange={handleQueryChanges}
                    labelText="Search"
                    className={inputLinedOnFocus}
                />
            </div>

            <PublicSidebarLinks />

            <UserSidebarLinks />
        </nav>
    );
}

export default Sidebar;
