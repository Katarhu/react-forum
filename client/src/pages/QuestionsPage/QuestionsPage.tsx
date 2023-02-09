import PostSkeleton from './components/PostSkeleton/PostSkeleton';
import FilterButtons from "./components/FilterButtons/FilterButtons";

import * as styles from "./QuestionsPage.module.scss";


function QuestionsPage() {
    return (
        <div className={styles.postsPage}>
            <FilterButtons />

            <div className={styles.postsContainer}>
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
            </div>
        </div>
    );
}

export default QuestionsPage;
