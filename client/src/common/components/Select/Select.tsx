import * as styles from "./Select.module.scss";


interface SelectProps {
    label?: string;
}

function Select({label}: SelectProps) {


    return (
        <div className={styles.selectContainer}>

            <div className={styles.select}>
                <span className={styles.selectLabel}>{label}</span>
                {/*<div className={styles.selectedItem}></div>*/}
            </div>

            <div className={styles.selectItems}></div>
        </div>
    );
}

export default Select;
