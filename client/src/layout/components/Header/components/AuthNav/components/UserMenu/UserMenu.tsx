import Menu from '../../../../../../../common/components/Menu/Menu';

import {useAppDispatch} from '../../../../../../../hooks/redux';
import {logout} from '../../../../../../../store/user/user.slice';

import {FiLogOut, FiSettings} from "react-icons/fi";

import UserImage from '../../../../../../../common/components/UserImage/UserImage';
import UserIcon from "../../../../../../../common/components/UserIcon/UserIcon";


import Button, {AppLink} from "../../../../../../../common/components/Button/Button";
import {commonButton, secondaryDanger} from "../../../../../../../common/components/Button/Button.module.scss";

import ROUTES from "../../../../../../../router/constants/routes";

function UserMenu() {

    const url = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

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
                    <AppLink
                        className={commonButton}
                        to={ROUTES.PROFILE}
                        notRounded
                    >
                        My Profile
                    </AppLink>
                </Menu.DropdownItem>

                <Menu.DropdownDivider />

                <Menu.DropdownItem>
                    <AppLink
                        className={commonButton}
                        to={ROUTES.PROFILE}
                        notRounded
                    >
                        <FiSettings />
                        Settings
                    </AppLink>
                </Menu.DropdownItem>

                <Menu.DropdownDivider />

                <Menu.DropdownItem>
                    <Button
                        className={secondaryDanger}
                        onClick={handleLogout}
                        notRounded
                    >
                        <FiLogOut /> Logout
                    </Button>
                </Menu.DropdownItem>

            </Menu.Dropdown>
        </Menu>
    );
}

export default UserMenu;
