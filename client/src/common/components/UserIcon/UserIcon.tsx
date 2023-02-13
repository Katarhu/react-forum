import React from "react";

import * as styles from './UserIcon.module.scss';


interface UserIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string;
}

const UserIcon = ({ className = styles.userIcon, ...props }: UserIconProps) =>
    <div className={className} {...props} />


export default UserIcon;
