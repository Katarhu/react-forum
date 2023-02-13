import {AiOutlineClockCircle, AiOutlineCloseCircle} from "react-icons/ai";
import { BsArrowUpRight} from "react-icons/bs";

import * as styles from "../../QuestionsPage.module.scss";

const FilterButtons = () => {
    return (
        <div className={styles.filterContainer}>
            <button className={styles.filter}>
                <AiOutlineClockCircle /> New
            </button>
            <button className={styles.filter}>
                <BsArrowUpRight /> Top
            </button>
            <button className={styles.filter}>
                <AiOutlineCloseCircle /> Closed
            </button>
        </div>
    )
}

export default FilterButtons;