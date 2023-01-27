import {useAppSelector} from "../../hooks/redux";
import {selectIsAuth} from "../../store/user/user.selectors";
import {Navigate} from "react-router-dom";

interface PublicRouteProps {
    to: string;
    children: JSX.Element;
}

function PublicRoute({ to, children }: PublicRouteProps): JSX.Element {

    const isAuth = useAppSelector(selectIsAuth);

    if( isAuth ) return <Navigate to={to}/>

    return children
}

export default PublicRoute;
