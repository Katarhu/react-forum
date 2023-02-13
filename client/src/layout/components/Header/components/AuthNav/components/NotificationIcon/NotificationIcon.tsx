import {Link} from "react-router-dom";

import {BsBell} from "react-icons/all";

import ROUTES from "../../../../../../../router/constants/routes";

import * as styles from './NotificationIcon.module.scss';


function NotificationIcon() {

    const isNotification = true;

    const notificationIndicator =
        isNotification &&
        <span className={styles.thereIsNotification}></span>

    return (
        <>
            <Link to={ROUTES.NOTIFICATIONS} className={styles.notification}>
                <BsBell />
                {notificationIndicator}
            </Link>
        </>
    );
}

export default NotificationIcon;
