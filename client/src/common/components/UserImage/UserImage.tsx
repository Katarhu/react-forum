import React, {memo} from "react";

import * as styles from "./UserImage.module.scss";

interface UserImageProps {
    url: string;
    className?: string;
    alt?: string;
    maxWidth?: number;
}

const UserImage = ({ url, className = styles.userImageContainer, alt = "User image", maxWidth}: UserImageProps) =>
    <div
        className={className}
        style={{
            maxWidth: maxWidth ? maxWidth + "em" : undefined,
        }}
    >
        <img
            className={styles.userImage}
            draggable={false}
            src={url}
            alt={alt}
        />
    </div>


export default memo(UserImage);
