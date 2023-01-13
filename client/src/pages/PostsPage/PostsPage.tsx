import PostSkeleton from '../../common/components/PostSkeleton/PostSkeleton';

import {AiOutlineClockCircle, AiOutlineCloseCircle} from 'react-icons/all';
import {BsArrowUpRight} from 'react-icons/all';

import * as styles from "./PostsPage.module.scss";


function PostsPage() {
    return (
        <div className={styles.postsPage}>
            <div className={styles.filterContainer}>
                <button className={styles.filter}>
                    <AiOutlineClockCircle /> New
                </button>
                <button className={styles.filter}>
                    <BsArrowUpRight /> Top
                </button>
                <button className={styles.filter}>
                    <AiOutlineCloseCircle /> Closed
                </button>
            </div>

            <div className={styles.postsContainer}>
                <PostSkeleton/>
                <PostSkeleton/>
                <PostSkeleton/>
                <PostSkeleton/>
            </div>
        </div>
    );
}

export default PostsPage;
