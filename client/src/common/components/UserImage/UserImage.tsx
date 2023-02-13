import React, {memo} from "react";

import * as styles from "./UserImage.module.scss";

interface UserImageProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    url: string;
    className?: string;
    maxWidth?: number;
    alt?: string;
}

const UserImage = ({ url, className = styles.userImageContainer, alt = "User image", maxWidth, ...props}: UserImageProps) =>
    <div
        className={className}
        style={{
            maxWidth: maxWidth ? maxWidth + "em" : undefined,
        }}
        {...props}
    >
        <img
            className={styles.userImage}
            draggable={false}
            src={url}
            alt={alt}
        />
    </div>


export default memo(UserImage);
