import * as styles from "./PostSkeleton.module.scss";

function PostSkeleton() {
    return (
        <div className={styles.skeletonContainer}>
            <div className={styles.skeletonHeader}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonInfoContainer}>
                    <div className={styles.skeletonUsername}></div>
                    <div className={styles.skeletonCreationDate}></div>
                </div>
            </div>

            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonText}></div>

            <div className={styles.skeletonTagsContainer}>
                <span className={styles.skeletonTag}></span>
                <span className={styles.skeletonTag}></span>
                <span className={styles.skeletonTag}></span>
            </div>
        </div>
    );
}

export default PostSkeleton;
