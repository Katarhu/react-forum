import {ReactNode} from "react";

import {selectIsAuth} from "../../store/user/user.selectors";
import {useAppSelector} from "../../hooks/redux";
import {Navigate} from "react-router-dom";


interface PrivateRouteProps {
    to: string;
    children: JSX.Element;
}

function PrivateRoute({ to, children }: PrivateRouteProps): JSX.Element {

    const isAuth = useAppSelector(selectIsAuth);

    if( !isAuth ) return <Navigate to={to}/>;

    return children;
}

export default PrivateRoute;
