import {ChangeEvent, useState} from "react";

import {FiSearch} from "react-icons/fi";

import {TextField} from "../../common/components/Input/Input";
import {inputLineFocused} from "../../common/components/Input/Input.module.scss";

import * as styles from "./SearchBar.module.scss";


function SearchBar() {
    const [query, setQuery] = useState('');

    const handleQueryChanges = (event: ChangeEvent) => {
        setQuery((event.target as HTMLInputElement).value)
    }

    return (
        <div className={styles.sidebarSearchContainer}>
            <FiSearch className={styles.sidebarSearchIcon} />

            <TextField
                value={query}
                onChange={handleQueryChanges}
                labelText="Search"
                className={inputLineFocused}
            />
        </div>
    );
}

export default SearchBar;
