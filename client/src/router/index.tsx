import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import MainLayout from "../layout/components/MainLayout/MainLayout";

import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import PostPage from "../pages/PostPage/PostPage";

import ROUTES from "./routes";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import NotificationPage from "../pages/NotificationPage/NotificationPage";
import AddQuestionPage from "../pages/AddQuestionPage/AddQuestionPage";


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
            },
            {
                path: ROUTES.POSTS,
                element: <MainLayout children={<PostsPage />}/>
            },
            {
                path: ROUTES.POSTS_ID,
                element: <MainLayout children={ <PostPage /> }/>
            },
            {
                path: ROUTES.PROFILE,
                element: <MainLayout children={<ProfilePage />}/>
            },
            {
                path: ROUTES.NOTIFICATIONS,
                element: <MainLayout children={<NotificationPage />}/>
            },
            {
                path: ROUTES.ADD_QUESTION,
                element: <MainLayout children={<AddQuestionPage />}/>
            }
        ]
    }
]);

export default router;
