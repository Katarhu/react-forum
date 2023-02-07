import React, {memo, MouseEventHandler} from 'react';

import * as styles from './Button.module.scss';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    onClick?: MouseEventHandler
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children: any;
    testId?: string;
    className?: string;
}


function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
        >
            {children}
        </button>
    )
}

export default memo(Button)
