import * as styles from "../Modal.module.scss";
import {ReactNode} from 'react';

interface ModalWrapperProps {
    children: ReactNode;
}

function ModalWrapper({ children }: ModalWrapperProps) {
    return (
        <div className={styles.modalScreen}>
            <div className={styles.modalContainer}>
                {children}
            </div>
        </div>
    );
}

export default ModalWrapper;