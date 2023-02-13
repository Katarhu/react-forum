import * as styles from "./ErrorPage.module.scss";
import {Link} from "react-router-dom";
import ROUTES from "../../router/constants/routes";


function ErrorPage() {
    return (
        <div>
            <h2>Error element</h2>
            <Link to={ROUTES.QUESTIONS}>Back to home page</Link>
        </div>
    );
}

export default ErrorPage;
