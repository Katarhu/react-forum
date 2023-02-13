import React, {createRef, MouseEventHandler, ReactNode} from 'react';

import useClickOutside from "../../../hooks/useOnClickOutside";

import {BiX} from "react-icons/all";

import * as styles from "./Modal.module.scss";


interface CommonSubcomponentProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties
}

interface ModalWrapperProps extends CommonSubcomponentProps {
    onClose: MouseEventHandler;
}

interface FlexContainer extends CommonSubcomponentProps {
    flex?: boolean;
    alignCenter?: boolean;
    justifyCenter?: boolean;
    column?: boolean;
    gap?: number;
}

interface SizeableComponent extends CommonSubcomponentProps {
    size?: number;
}


type ModalContainer = CommonSubcomponentProps & FlexContainer;
type ModalText = CommonSubcomponentProps & SizeableComponent;

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

Modal.Header = ({children, className = styles.modalHeader, size, ...props}: ModalText) => {
    return (
        <div
            className={className}
            {...props}
        >
            {children}
        </div>
    )
}

Modal.Title = ({children, className = styles.modalTitle, size=1.25, ...props}: ModalText) => {
    return (
        <h2
            className={className}
            style={{
                fontSize: size + "em",
            }}
            {...props}
        >
            {children}
        </h2>
    )
}

Modal.SubTitle = ({children, className = styles.modalSubtitle, size = 1, ...props}: ModalText) => {
    return (
        <h3
            className={className}
            style={{
                fontSize: size + "em",
            }}
            {...props}
        >
            {children}
        </h3>
    )
};


Modal.Body = ({children, className = styles.modalBody, flex, column, alignCenter, justifyCenter, gap, ...props}: ModalContainer) => {
    return (
        <div
            className={className}
            style={{
                display: flex ? "flex" : undefined,
                alignItems: alignCenter ? "center" : undefined,
                justifyContent: justifyCenter ? "center" :undefined,
                flexDirection: column ? "column" : undefined,
                gap: gap ? gap + "em" : undefined,
            }}
            {...props}
        >
            {children}
        </div>
    )
};

Modal.Text = ({children, className = styles.modalText, size = 0.75, ...props}: ModalText) => {
    return (
        <p
            className={className}
            style={{
                fontSize: size + "em"
            }}
            {...props}
        >
            {children}
        </p>
    )
};

Modal.Controls = ({children, className = styles.modalControls, flex, alignCenter, column, justifyCenter, gap, ...props}: ModalContainer) => {
    return (
        <div
            className={className}
            style={{
                display: flex ? "flex" : undefined,
                alignItems: alignCenter ? "center" : undefined,
                justifyContent: justifyCenter ? "center" :undefined,
                flexDirection: column ? "column" : undefined,
                gap: gap ? gap + "em" : undefined,
            }}
            {...props}
        >
            {children}
        </div>
    )
};

export default Modal;