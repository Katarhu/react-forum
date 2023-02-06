import PostSkeleton from '../QuestionPage/components/PostSkeleton/PostSkeleton';

import {AiOutlineClockCircle, AiOutlineCloseCircle} from 'react-icons/all';
import {BsArrowUpRight} from 'react-icons/all';

import * as styles from "./QuestionsPage.module.scss";


function QuestionsPage() {
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

export default QuestionsPage;
