import React from "react";

import * as styles from './UserIcon.module.scss';


interface UserIconProps {
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
}

const UserIcon = ({ className = styles.userIcon, onClick }: UserIconProps) =>
    <button onClick={onClick} className={className}></button>


export default UserIcon;
