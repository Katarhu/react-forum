import React, {ReactNode} from 'react';

import * as styles from "./Skeleton.module.scss";

interface ChildProps {
    children: ReactNode;
}

interface FlexProps {
    flex?: boolean;
    column?: boolean;
    alignCenter?: boolean;
    gap?: number;
}

interface WidthProps {
    width?: number;
    maxWidth?: number;
    minWidth?: number;
}

interface SizeableProps {
    size?: number;
}

type SkeletonProps = ChildProps & WidthProps;

type SkeletonTextProps = SizeableProps & WidthProps;

type SkeletonContainer = ChildProps & FlexProps;

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

Skeleton.Circle = ({ maxWidth, width, minWidth }: WidthProps) => {
    return (
        <div
            className={styles.skeletonCircle}
            style={{
                maxWidth: maxWidth ? maxWidth + "em" : undefined,
                width: width ? width + "%" : undefined,
                minWidth: minWidth ? minWidth + "em" : undefined,
            }}
        />
    )
}


Skeleton.Box = ({ children, gap, alignCenter, flex, column }: SkeletonContainer) => {
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