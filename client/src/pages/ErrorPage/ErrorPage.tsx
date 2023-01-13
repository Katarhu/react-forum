import * as styles from "./ErrorPage.module.scss";
import {Link} from "react-router-dom";
import ROUTES from "../../router/routes";


function ErrorPage() {
    return (
        <div>
            <h2>Error element</h2>
            <Link to={ROUTES.POSTS}>Back to home page</Link>
        </div>
    );
}

export default ErrorPage;