import React, {memo, MouseEventHandler} from 'react';

import {Link, LinkProps} from "react-router-dom";

import * as styles from './Button.module.scss';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    onClick?: MouseEventHandler
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children: any;
    testId?: string;
    className?: string;
    ref?: any;
    notRounded?: boolean;
}


const Button = ({ children, disabled, notRounded, className = styles.commonButton, ...props }: ButtonProps) => {
    return (
        <button
            className={className}
            aria-disabled={disabled}
            disabled={disabled}
            style={{
                borderRadius: notRounded ? "unset" : undefined,
            }}
            {...props}
        >
            {children}
        </button>
    )
}

interface AppLinkProps extends LinkProps {
    className?: string;
    notRounded?: boolean;
}

export const AppLink = ({ children, notRounded, className = styles.commonButton, to }: AppLinkProps) => {
    return (
        <Link
            className={className}
            to={to}
            style={{
                borderRadius: notRounded ? "unset" : undefined,
            }}
        >
            {children}
        </Link>
    )
}


export default memo(Button)
