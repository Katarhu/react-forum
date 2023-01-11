import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";

import ROUTES from "./routes";


const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <App />,
        children: [
            {
                path: ROUTES.LOGIN,
                element: <LoginPage/>
            },
            {
                path: ROUTES.REGISTER,
                element: <RegisterPage />
            }
        ]
    }
]);

export default router;
