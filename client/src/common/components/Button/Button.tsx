import React, {memo, MouseEventHandler} from 'react';

import * as styles from './Button.module.scss';
import {Link, LinkProps} from "react-router-dom";

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    onClick?: MouseEventHandler
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children: any;
    testId?: string;
    className?: string;
    ref?: any;
    rounded?: boolean;
}


const Button = ({ children, disabled, rounded, className = styles.commonButton, ...props }: ButtonProps) => {
    return (
        <button
            className={className}
            aria-disabled={disabled}
            disabled={disabled}
            style={{
                borderRadius: rounded ? ".3em" : undefined,
            }}
            {...props}
        >
            {children}
        </button>
    )
}

interface AppLinkProps extends LinkProps {
    className?: string;
    rounded?: boolean;
}

export const AppLink = ({ children, rounded, className = styles.commonButton, to }: AppLinkProps) => {
    return (
        <Link
            className={className}
            to={to}
            style={{
                borderRadius: rounded ? ".3em" : undefined,
            }}
        >
            {children}
        </Link>
    )
}


export default memo(Button)
