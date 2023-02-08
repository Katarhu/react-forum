import React, {ReactNode} from 'react';

import * as styles from "./Skeleton.module.scss";

interface SkeletonProps {
    children: ReactNode;
    maxWidth?: number;
    minWidth?: number;
}

const Skeleton = ({ children, maxWidth, minWidth }: SkeletonProps) => {
    return (
        <div
            className={styles.skeletonContainer}
            style={{
                maxWidth: maxWidth ? maxWidth + "em" : undefined,
                minWidth: minWidth ? minWidth + "em" : undefined,
            }}
        >
            {children}
        </div>
    );
};

interface SkeletonTextProps {
    width?: number;
    maxWidth?: number;
    size?: number;
}

Skeleton.Text = ({ width, maxWidth, size }: SkeletonTextProps) => {
    return (
        <div
            className={styles.skeletonText}
            style={{
                width: width ? width + "%" : undefined,
                maxWidth: maxWidth ? maxWidth + "em" : undefined,
                fontSize: size ? size + "em" : "1em"
            }}
        />
    )
}

interface SkeletonCircleProps {
    maxWidth?: number;
}

Skeleton.Circle = ({ maxWidth }: SkeletonCircleProps) => {
    return (
        <div
            className={styles.skeletonCircle}
            style={{
                maxWidth: maxWidth ? maxWidth + "em" : undefined,
            }}
        />
    )
}

interface SkeletonBoxProps {
    children: ReactNode;
    flex?: boolean;
    column?: boolean;
    alignCenter?: boolean;
    gap?: number;
}

Skeleton.Box = ({ children, gap, alignCenter, flex, column }: SkeletonBoxProps) => {
    return (
        <div
            className={styles.skeletonBox}
            style={{
                gap: gap ? gap + "em" : undefined,
                display: flex ? "flex" : undefined,
                alignItems: alignCenter ? "center" : undefined,
                flexDirection: column ? "column" : undefined,
            }}
        >
            {children}
        </div>
    )
}

export default Skeleton;