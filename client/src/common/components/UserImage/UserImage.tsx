import React, {memo} from "react";

import * as styles from "./UserImage.module.scss";

interface UserImageProps {
    url: string;
    className?: string;
    alt?: string
    onClick?: (event: React.MouseEvent) => void;
}

const UserImage = ({ url, className = styles.userImageContainer, alt = "User image", onClick}: UserImageProps) =>
    <button
        onClick={onClick}
        className={className}
    >
        <img
            className={styles.userImage}
            draggable={false}
            src={url}
            alt={alt}
        />
    </button>


export default memo(UserImage);
