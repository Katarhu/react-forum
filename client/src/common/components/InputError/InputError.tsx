import {memo} from "react";

import {GiCancel} from 'react-icons/gi'
import {BiError} from 'react-icons/bi'

import * as styles from './InputError.module.scss';

interface InputErrorProps {
    errors: string[];
}

function InputError({ errors }: InputErrorProps) {

    const errorItems = errors.map((error) =>
        <li className={styles.inputErrorsListItem} key={error}>
            <span className={styles.inputErrorsListIcon}><BiError/></span> {error}
        </li>
    )

    return (
        <div className={styles.inputErrors}>
            <span className={styles.inputErrorsIcon}>
                <GiCancel />
            </span>
            <ul className={styles.inputErrorsList}>
                {errorItems}
            </ul>
        </div>
    );
}

export default memo(InputError);
