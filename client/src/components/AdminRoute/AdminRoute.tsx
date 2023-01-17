import {ReactNode} from "react";
import {useAppSelector} from "../../hooks/redux";
import {selectIsAuth, selectIsUserAdmin} from "../../store/user/user.selectors";
import {Navigate} from "react-router-dom";


interface AdminRouteProps {
    to: string;
    children: JSX.Element;
}

function AdminRoute({ to, children }: AdminRouteProps): JSX.Element {

    const isAuth = useAppSelector(selectIsAuth);

    if( !isAuth ) return <Navigate to={to}/>

    const isAdmin = useAppSelector(selectIsUserAdmin);

    if( !isAdmin ) return <Navigate to={to}/>

    return children;
}

export default AdminRoute;
