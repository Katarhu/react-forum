import {NavLink} from "react-router-dom";

import {RxHamburgerMenu} from "react-icons/rx";
import {TbMedal2} from "react-icons/tb";
import {BsTags} from "react-icons/bs";

import ROUTES from "../../../../../router/constants/routes";

import * as styles from "../../Sidebar.module.scss";

function PublicSidebarLinks() {
    return (
        <div className={styles.publicSidebarLinks}>
            <p className={styles.sidebarLinksLabel}>Menu</p>

            <div className={styles.userSidebarLinksContainer}>
                <NavLink
                    to={ROUTES.QUESTIONS}
                    className={({ isActive}) =>
                        isActive ? styles.sidebarLinkActive : styles.sidebarLink
                    }
                >
                    <RxHamburgerMenu className={styles.sidebarLinksIcon}/> Questions
                </NavLink>

                <NavLink
                    to={ROUTES.TAGS}
                    className={({ isActive}) =>
                        isActive ? styles.sidebarLinkActive : styles.sidebarLink
                    }
                >
                    <BsTags className={styles.sidebarLinksIcon}/> Tags
                </NavLink>

                <NavLink
                    to={ROUTES.RANKINGS}
                    className={({ isActive}) =>
                        isActive ? styles.sidebarLinkActive : styles.sidebarLink
                    }
                >
                    <TbMedal2 className={styles.sidebarLinksIcon} />Rankings
                </NavLink>
            </div>
        </div>
    );
}

export default PublicSidebarLinks;
