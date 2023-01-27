import {ChangeEvent, FormEventHandler, useState} from "react";

import Input from "../Input/Input";

import {BiX} from "react-icons/all";

import * as styles from "./Select.module.scss";
import Tag from "./components/Tag/Tag";


interface SelectProps {
    label: string;
}

function Select({label}: SelectProps) {

    const [query, setQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<any[]>([
        {
            id: 1,
            label: "Taggggggggg"
        },
        {
            id: 3,
            label: "Tag"
        }
    ]);

    const handleInputChange = (event: ChangeEvent) => {
        setQuery((event.target as HTMLInputElement).value);

        console.log((event.target as HTMLInputElement).value)
    }

    const handleSubmit: FormEventHandler = (event) => {
        console.log('hello')
        event.preventDefault();

        if( !query ) return;

        setSelectedTags((prev) => {
            const id = prev[prev.length - 1].id ?? 0;

            return [...prev, { id, label: query }];
        })
    }

    const handeTagRemove = (id: number) => {
        setSelectedTags((prevTags) => prevTags.filter((tag) => tag.id !== id ));
    }

    const getSelectedTags = (tags: any[]) => {
        return tags.map(({ id, label }) =>
            <Tag key={label} id={id} label={label} onClick={() => { handeTagRemove(id) }}/>
        )
    }

    const selectedTagsItems = getSelectedTags(selectedTags);

    return (
        <div
            className={styles.selectContainer}
        >

            <div className={styles.select}>

                <div className={styles.selectItems}>
                    {selectedTagsItems}
                </div>

                <Input
                    onChange={handleInputChange}
                    labelText={label}
                    value={query}
                />
            </div>

            <div className={styles.selectItems}></div>
        </div>
    );
}

export default Select;
