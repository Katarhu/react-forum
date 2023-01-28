
import * as styles from "../../TagsSelect.module.scss";
import {ITag} from '../../../../../../models/tags.model';
import {FocusEventHandler, KeyboardEventHandler, MouseEventHandler, useEffect, useRef, useState} from 'react';


const options: ITag[] = [
    {
        id: "1",
        label: "tag"
    },
    {
        id: "2",
        label: "tag"
    },
    {
        id: "3",
        label: "tag"
    },
    {
        id: "4",
        label: "tag"
    },
    {
        id: "5",
        label: "tag"
    },
    {
        id: "6",
        label: "tag"
    },
    {
        id: "7",
        label: "tag"
    },
    {
        id: "8",
        label: "tag"
    },
    {
        id: "9",
        label: "tag"
    },
    {
        id: "10",
        label: "tag"
    },
    {
        id: "11",
        label: "tag"
    },
    {
        id: "12",
        label: "tag"
    },
]

function TagDropdown() {

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const containerRef = useRef<HTMLUListElement>(null);

    const handleKeyDown = (index: number): KeyboardEventHandler =>
        (event) => {
            switch (event.key) {
                case " ":
                case "Enter":
                case "Space":
                    onSelect(index);
                    break;
                case "ArrowUp":
                    decreaseIndex();
                    break
                case "ArrowDown":
                    increaseIndex();
                    break;
                default:
                    break;
        }
    }

    const onFocus = (index: number): FocusEventHandler =>
        (event) => {
            setSelectedOptionIndex(index);
        }

    const increaseIndex = () => {
        if( selectedOptionIndex + 1 > options.length - 1 ) return;

        setSelectedOptionIndex(prev => prev + 1);
    }

    const decreaseIndex = () => {
        if ( selectedOptionIndex - 1 < 0 ) return;

        setSelectedOptionIndex(prev => prev - 1);
    }

    const onSelect = (index: number) => {
        console.log(options[index]);
    }

    useEffect(() => {
        if( !containerRef.current ) return;
        const nextListItem =  containerRef.current.children[selectedOptionIndex] as HTMLUListElement;
        nextListItem.focus();
    }, [selectedOptionIndex])

    const getDropdownOptions = (tags: ITag[]) => {
        if (!tags.length) return;

        return tags.map(({id, label}, index) =>
            <li
                key={id}
                role="option"
                aria-selected={selectedOptionIndex === index}
                className={styles.selectDropdownItem}
                tabIndex={0}
                onKeyDown={handleKeyDown(index)}
                onClick={() => {onSelect(index)}}
                onFocus={onFocus(index)}

            >
                {label}
            </li>
        )
    }

    const dropdownOptions = getDropdownOptions(options);

    return (
        <div
            className={styles.selectDropdown}
        >
            <ul
                role="listbox"
                className={styles.selectDropdownList}
                ref={containerRef}
                tabIndex={-1}
            >
                {dropdownOptions}
            </ul>
        </div>
    );
}

export default TagDropdown;