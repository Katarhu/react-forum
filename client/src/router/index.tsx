import {createBrowserRouter, Navigate} from "react-router-dom";

import App from "../App";
import MainLayout from "../layout/components/MainLayout/MainLayout";

import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import QuestionsPage from "../pages/QuestionsPage/QuestionsPage";
import QuestionPage from "../pages/QuestionPage/QuestionPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import NotificationPage from "../pages/NotificationPage/NotificationPage";
import AddQuestionPage from "../pages/AddQuestionPage/AddQuestionPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import ROUTES from "./routes";
import RankingsPage from "../pages/RankingsPage/RankingsPage";
import TagsPage from "../pages/TagsPage/TagsPage";
import PublicRoute from "../components/PublicRoute/PublicRoute";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTES.LOGIN,
                element: <PublicRoute to={ROUTES.QUESTIONS}>
                            <LoginPage/>
                        </PublicRoute>
            },
            {
                path: ROUTES.REGISTER,
                element: <PublicRoute to={ROUTES.QUESTIONS}>
                            <RegisterPage/>
                        </PublicRoute>
            },
            {
                path: ROUTES.QUESTIONS,
                element: <MainLayout children={<QuestionsPage />}/>
            },
            // {
            //     path: ROUTES.QUESTION_ID(),
            //     element: <MainLayout children={ <QuestionPage /> }/>
            // },
            // {
            //     path: ROUTES.PROFILE,
            //     element: <PrivateRoute to={ROUTES.QUESTIONS}>
            //                 <MainLayout children={<ProfilePage />}/>
            //             </PrivateRoute>
            // },
            // {
            //     path: ROUTES.NOTIFICATIONS,
            //     element: <PrivateRoute to={ROUTES.QUESTIONS}>
            //                 <MainLayout children={<NotificationPage />}/>
            //             </PrivateRoute>
            // },
            // {
            //     path: ROUTES.ADD_QUESTION,
            //     element: <PrivateRoute to={ROUTES.QUESTIONS}>
            //                 <MainLayout children={<AddQuestionPage />}/>
            //             </PrivateRoute>
            // },
            // {
            //     path: ROUTES.RANKINGS,
            //     element: <MainLayout children={<RankingsPage />}/>
            // },
            // {
            //     path: ROUTES.TAGS,
            //     element: <MainLayout children={<TagsPage />}/>
            // },
            {
                path: ROUTES.NOT_MATCHING,
                element: <Navigate to={ROUTES.QUESTIONS}/>
            }
        ]
    }
]);

export default router;
