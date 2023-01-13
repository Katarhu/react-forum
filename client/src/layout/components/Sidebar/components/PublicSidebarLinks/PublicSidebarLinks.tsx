import {RxHamburgerMenu} from "react-icons/rx";
import {TbMedal2} from "react-icons/tb";
import {BsTags} from "react-icons/bs";

import * as styles from "../../Sidebar.module.scss";
import ROUTES from "../../../../../router/routes";
import {Link} from "react-router-dom";

function PublicSidebarLinks() {
    return (
        <div className={styles.publicSidebarLinks}>
            <p className={styles.sidebarLinksLabel}>Menu</p>

            <div className={styles.userSidebarLinksContainer}>
                <Link className={styles.sidebarLink} to={ROUTES.POSTS}>
                    <RxHamburgerMenu className={styles.sidebarLinksIcon}/> Questions
                </Link>

                <Link className={styles.sidebarLink} to={ROUTES.POSTS}>
                    <BsTags className={styles.sidebarLinksIcon}/> Tags
                </Link>

                <Link className={styles.sidebarLinkActive} to={ROUTES.POSTS}>
                    <TbMedal2 className={styles.sidebarLinksIcon} />Rankings
                </Link>
            </div>
        </div>
    );
}

export default PublicSidebarLinks;
