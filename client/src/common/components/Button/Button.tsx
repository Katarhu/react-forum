import React, {memo, MouseEventHandler} from 'react';

import * as styles from './Button.module.scss';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    onClick?: MouseEventHandler
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children: any;
    testId?: string;
    className?: string;
    ref?: any;
}


function Button({ children, disabled, className = styles.commonButton, ...props }: ButtonProps) {
    return (
        <button
            className={className}
            aria-disabled={disabled}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default memo(Button)
