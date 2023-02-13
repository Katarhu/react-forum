import {memo} from "react";

import {GiCancel} from 'react-icons/gi'
import {BiError} from 'react-icons/bi'

import * as styles from '../Form.module.scss';


interface InputErrorProps {
    errors: string[];
}

function InputError({ errors }: InputErrorProps) {

    const errorItems = errors.map((error) =>
        <li className={styles.formInputErrorsListItem} key={error}>
            <span className={styles.formInputErrorsListIcon}><BiError/></span> {error}
        </li>
    )

    return (
        <div className={styles.formInputErrors}>
            <span className={styles.formInputErrorsIcon}>
                <GiCancel />
            </span>
            <ul className={styles.formInputErrorsList}>
                {errorItems}
            </ul>
        </div>
    );
}

export default memo(InputError);
