import {BsPatchQuestion} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";

import ROUTES from "../../../../../router/routes";

import * as styles from "../../Sidebar.module.scss";
import {Link} from "react-router-dom";

function UserSidebarLinks() {
    return (
        <div className={styles.userSidebarLinks}>
            <p className={styles.sidebarLinksLabel}>Personal Navigator</p>

            <div className={styles.userSidebarLinksContainer}>
                <Link className={styles.sidebarLink} to={ROUTES.POSTS}>
                    <BsPatchQuestion className={styles.sidebarLinksIcon}/> Your questions
                </Link>

                <Link className={styles.sidebarLink} to={ROUTES.POSTS}>
                    <FaRegComment className={styles.sidebarLinksIcon}/> Your answers
                </Link>

                <Link className={styles.sidebarLink} to={ROUTES.POSTS}>
                    <AiOutlineHeart className={styles.sidebarLinksIcon}/> Your likes & votes
                </Link>
            </div>
        </div>
    );
}

export default UserSidebarLinks;