import {BaseSyntheticEvent, useState} from 'react';


import {ITag} from '../../../../models/tags.model';

import * as styles from "./TagsSelect.module.scss";

import Select, {MultiValue, SingleValue} from "react-select";
import {InputActionMeta} from "react-select";
import CreatableSelect from "react-select/creatable";


interface SelectProps {
    placeholder: string;
}

const options = [
    { id: "1", label: "first-tag", value: "first"},
    { id: "2", label: "second-tag", value: "second"},
    { id: "3", label: "third-tag", value: "third"},
    { id: "4", label: "forth-tag", value: "forth"},
]


function TagsSelect({ placeholder }: SelectProps) {
    const [query, setQuery] = useState('');
    const [value, setValue] = useState<ITag[]>([]);

    const handleSelectChange = (newValue: MultiValue<ITag> ) => {
        setValue(newValue as ITag[]);
    }

    const handleSelectInputChange = (newValue: string, actionMeta: InputActionMeta) => {
        const lastInputChar = newValue.toLowerCase().replace(actionMeta.prevInputValue, "");

        if( lastInputChar === " ") return;

        setQuery(newValue.toLowerCase())
    }

    return (
        <div
            className={styles.selectContainer}
        >
            <CreatableSelect
                isMulti
                value={value}
                onChange={handleSelectChange}
                options={options}
                inputValue={query}
                onInputChange={handleSelectInputChange}
                placeholder={placeholder}
            />

        </div>
    );
}

export default TagsSelect;
