
import * as styles from "../../Select.module.scss";
import {BiX} from "react-icons/all";

interface TagProps {
    id: number;
    label: string;
    onClick: () => void;
}


function Tag({ id, label, onClick }: TagProps) {


    return (
        <div className={styles.selectedItem}>
            <span className={styles.selectedItemText}>{label}</span>
            <BiX className={styles.selectedItemIcon} onClick={onClick} />
        </div>
    );
}

export default Tag;
