import {ChangeEvent, useState} from "react";

import {FiSearch} from "react-icons/fi";

import Input from "../../common/components/Input/Input";
import {inputLinedOnFocus} from "../../common/components/Input/Input.module.scss";

import * as styles from "./SearchBar.module.scss";


function SearchBar() {
    const [query, setQuery] = useState('');

    const handleQueryChanges = (event: ChangeEvent) => {
        setQuery((event.target as HTMLInputElement).value)
    }

    return (
        <div className={styles.sidebarSearchContainer}>
            <FiSearch className={styles.sidebarSearchIcon} />
            <Input
                value={query}
                onChange={handleQueryChanges}
                labelText="Search"
                className={inputLinedOnFocus}
            />
        </div>
    );
}

export default SearchBar;
