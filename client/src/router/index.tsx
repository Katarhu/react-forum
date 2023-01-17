import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import MainLayout from "../layout/components/MainLayout/MainLayout";

import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import PostPage from "../pages/PostPage/PostPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import NotificationPage from "../pages/NotificationPage/NotificationPage";
import AddQuestionPage from "../pages/AddQuestionPage/AddQuestionPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import ROUTES from "./routes";
import RankingsPage from "../pages/RankingsPage/RankingsPage";
import TagsPage from "../pages/TagsPage/TagsPage";



const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <ErrorPage />,
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
                path: ROUTES.QUESTIONS,
                element: <MainLayout children={<PostsPage />}/>
            },
            {
                path: ROUTES.QUESTION_ID(),
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
            },
            {
                path: ROUTES.RANKINGS,
                element: <MainLayout children={<RankingsPage />}/>
            },
            {
                path: ROUTES.TAGS,
                element: <MainLayout children={<TagsPage />}/>
            },
            {
                path: ROUTES.NOT_MATCHING,
                element: <MainLayout children={ <PostsPage /> }/>
            }
        ]
    }
]);

export default router;
