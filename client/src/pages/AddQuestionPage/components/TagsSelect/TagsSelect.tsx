import {BaseSyntheticEvent, useState} from 'react';

import Input from '../../../../common/components/Input/Input';
import {inputWithPlaceholder} from "../../../../common/components/Input/Input.module.scss";

import Tag from "./components/Tag/Tag";

import * as styles from "./TagsSelect.module.scss";
import {ITag} from '../../../../models/tags.model';
import TagDropdown from './components/TagDropdown/TagDropdown';


const MAX_TAGS_LENGTH = 5;
const MAX_TAG_LABEL_LENGTH = 25;


interface SelectProps {
    placeholder: string;
}

function TagsSelect({placeholder}: SelectProps) {

    const [query, setQuery] = useState('');
    const [isMaxTagLength, setIsMaxTagLength] = useState(false);
    const [selectedTags, setSelectedTags] = useState<ITag[]>([
        {
            id: "1",
            label: "Taggggggggg"
        },
        {
            id: "2",
            label: "Tag"
        }
    ]);

    const handleInputChange = (event: BaseSyntheticEvent<CompositionEvent>) => {
        const inputValue = (event.target as HTMLInputElement).value;
        const inputSymbol = event.nativeEvent.data;

        if( inputSymbol === " " && inputValue.trim() && !isMaxTagLength ) {
            createTag(query);
            setQuery("");
            return;
        }

        if ( inputValue.length >= MAX_TAG_LABEL_LENGTH ) {
            return setIsMaxTagLength(true);
        }

        setIsMaxTagLength(false);
        setQuery(inputValue.trim());
    }

    const handeTagRemove = (id: string) => {
        setSelectedTags((prevTags) => prevTags.filter((tag) => tag.id !== id ));
    }

    const createTag = (label: string) => {
        const id = ((+selectedTags[selectedTags.length - 1]?.id ?? 0) + 1).toString();

        setSelectedTags(prev => [...prev, { id, label }]);
    }

    const handleTagEdit = (id: string, label: string) => {
        if( query ) createTag(query);
        setQuery(label);
        handeTagRemove(id);
    }

    const getSelectedTags = (tags: any[]) => {
        return tags.map(({ id, label }) =>
            <Tag
                key={label}
                id={id}
                label={label}
                onClick={() => { handeTagRemove(id) }}
                onDoubleClick={() => handleTagEdit(id,label) }
            />
        )
    }

    const selectedTagsItems = getSelectedTags(selectedTags);
    const isTagsLimit = selectedTags.length >= MAX_TAGS_LENGTH;
    const selectError = isMaxTagLength && `Length should be less than: ${MAX_TAG_LABEL_LENGTH}`;

    return (
        <div
            className={styles.selectContainer}
        >

            <div className={styles.select}>

                <div className={styles.selectedTags}>
                    {selectedTagsItems}
                </div>

                <Input
                    onChange={handleInputChange}
                    className={inputWithPlaceholder}
                    placeholder={placeholder}
                    value={query}
                    disabled={isTagsLimit}
                />
            </div>

            <div className={styles.selectError}>
                {selectError}
            </div>

            <TagDropdown />

        </div>
    );
}

export default TagsSelect;
