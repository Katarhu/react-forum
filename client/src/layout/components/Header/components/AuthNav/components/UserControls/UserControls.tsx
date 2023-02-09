import React, {useState} from "react";

import Menu from '../../../../../../../common/components/Menu/Menu';

import UserImage from '../../../../../../../common/components/UserImage/UserImage';
import UserIcon from "../../../../../../../common/components/UserIcon/UserIcon";
import {Link} from "react-router-dom";
import ROUTES from "../../../../../../../router/routes";

import {FiLogOut} from "react-icons/fi";
import Button, {AppLink} from "../../../../../../../common/components/Button/Button";
import {commonButton, secondaryDanger} from "../../../../../../../common/components/Button/Button.module.scss";

function UserControls() {

    const url = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

    const userImage = url ?
        <UserImage url={url} maxWidth={2.75}/> :
        <UserIcon />

    return (
        <Menu>
            <Menu.Body flex gap={0.5}>
                <Menu.Toggle>
                    {userImage}
                </Menu.Toggle>

                <Menu.Toggle>
                    <Menu.ToggleIcon size={0.75} />
                </Menu.Toggle>
            </Menu.Body>

            <Menu.Dropdown>
                <Menu.DropdownItem>
                    <AppLink className={commonButton} to={ROUTES.PROFILE}>My Profile</AppLink>
                </Menu.DropdownItem>

                <Menu.DropdownDivider />

                <Menu.DropdownItem>
                    <Button className={secondaryDanger}><FiLogOut /> Logout</Button>
                </Menu.DropdownItem>
            </Menu.Dropdown>
        </Menu>
    );
}

export default UserControls;
