import {memo} from 'react';

import * as styles from './Button.module.scss';

interface ButtonProps {
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children: any;
    testId?: string;
    className?: string;
}


function Button({ children, onClick, type='button', className = styles.commonButton, disabled, testId="common-button" }: ButtonProps) {
    return (
        <button
            data-testid={testId}
            className={className}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default memo(Button)
