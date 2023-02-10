import React, {createRef, MouseEventHandler, ReactNode} from 'react';

import useClickOutside from "../../../hooks/useOnClickOutside";

import {BiX} from "react-icons/all";

import * as styles from "./Modal.module.scss";

interface ModalWrapperProps extends CommonSubcomponentProps {
    onClose: MouseEventHandler;
}

interface CommonSubcomponentProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties
}

function Modal({children, onClose}: ModalWrapperProps) {

    const containerRef = createRef<HTMLDivElement>()

    useClickOutside(containerRef, onClose);

    return (
        <div className={styles.modalScreen}>
            <div ref={containerRef} className={styles.modalContainer}>
                <button
                    onClick={onClose}
                    className={styles.modalCloseButton}
                >
                    <BiX className={styles.modalCloseIcon}/>
                </button>
                {children}
            </div>
        </div>
    );
}


Modal.Header = ({children, className = "", ...props}: CommonSubcomponentProps) => {
    return <div className={`${styles.modalHeader} ${className}`} {...props}>
        {children}
    </div>
}

Modal.Title = ({children, className = "", ...props}: CommonSubcomponentProps) => {
    return <h2 className={`${styles.modalTitle} ${className}`} {...props}>
        {children}
    </h2>
}

Modal.SubTitle = ({children, className = "", ...props}: CommonSubcomponentProps) => {
    return <h3 className={`${styles.modalSubtitle} ${className}`} {...props}>
        {children}
    </h3>
};

Modal.Body = ({children, className = "", ...props}: CommonSubcomponentProps) => {
    return <div className={`${styles.modalBody} ${className}`} {...props}>
        {children}
    </div>
};

Modal.Text = ({children, className = "", ...props}: CommonSubcomponentProps) => {
    return <p className={`${styles.modalText} ${className}`} {...props}>
        {children}
    </p>
};

Modal.Controls = ({children, className = "", ...props}: CommonSubcomponentProps) => {
    return <div className={`${styles.modalControls} ${className}`} {...props}>
        {children}
    </div>
};

export default Modal;