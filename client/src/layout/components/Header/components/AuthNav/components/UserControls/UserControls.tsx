import React, {useState} from "react";

import UserIcon from "../../../../../../../common/components/UserIcon/UserIcon";
import UserImage from "../../../../../../../common/components/UserImage/UserImage";

import UserMenu from "./components/UserMenu/UserMenu";

import * as styles from "./UserControls.module.scss";


function UserControls() {

    const [menuToggled, setMenuToggled] = useState(false);
    const url = "";

    const toggleMenu = (event: React.MouseEvent) => {
        event.stopPropagation();
        setMenuToggled(prev => !prev);

    }
    const closeMenu = () => {
        setMenuToggled(false);
    }

    const userImage = url ?
        <UserImage onClick={toggleMenu} url={url}/> :
        <UserIcon onClick={toggleMenu} />;

    const menu =
        menuToggled &&
        <UserMenu onClose={closeMenu} />

    return (
        <div className={styles.menuContainer}>
            {userImage}
            {menu}
        </div>
    );
}

export default UserControls;
