import {Link} from 'react-router-dom';

import {IPanelLink, featuredLinks, mustReadPosts} from '../../constants/links';

import {BiStar} from 'react-icons/bi';
import {BsLink45Deg} from 'react-icons/bs';

import * as styles from "../../MainPanel.module.scss";


function MainPanelLinks() {

    const getListContent = (links: IPanelLink[]) => {
        return links.map((link) =>
            <li className={styles.panelLinksListItem}>
                <Link className={styles.panelLink} to={link.to}>{link.content}</Link>
            </li>
        )
    }

    const mustReadLinkItems = getListContent(mustReadPosts);
    const featuredLinkItems = getListContent(featuredLinks);

    return (
        <nav className={styles.panelLinksContainer}>
            <h3 className={styles.panelLinksTitle}>
                <BiStar className={styles.panelLinksTitleIcon} /> Must-read posts
            </h3>
            <ul className={styles.panelLinksList}>
                {mustReadLinkItems}
            </ul>
            <h3 className={styles.panelLinksTitle}>
                <BsLink45Deg className={styles.panelLinksTitleIcon} /> Featured links
            </h3>
            <ul className={styles.panelLinksList}>
                {featuredLinkItems}
            </ul>
        </nav>
    );
}

export default MainPanelLinks;