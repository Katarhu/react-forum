
import * as styles from "../../TagsSelect.module.scss";
import {BiX} from "react-icons/all";
import {MouseEventHandler} from 'react';
import {ITag} from '../../../../../../models/tags.model';

interface TagProps extends ITag {
    onClick: MouseEventHandler;
    onDoubleClick: MouseEventHandler;
}


function Tag({ id, label, onClick, onDoubleClick }: TagProps) {
    return (
        <div className={styles.selectedItem}>
            <span className={styles.selectedItemText} onDoubleClick={onDoubleClick}>{label}</span>
            <BiX className={styles.selectedItemIcon} onClick={onClick} />
        </div>
    );
}

export default Tag;
