import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import QuestionsPage from "../../pages/QuestionsPage/QuestionsPage";
import QuestionPage from "../../pages/QuestionPage/QuestionPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import NotificationPage from "../../pages/NotificationPage/NotificationPage";
import AddQuestionPage from "../../pages/AddQuestionPage/AddQuestionPage";
import RankingsPage from "../../pages/RankingsPage/RankingsPage";
import TagsPage from "../../pages/TagsPage/TagsPage";


import ROUTES, {IRoute} from './routes';

export const LayoutTypes = {
    MAIN: "MAIN",
} as const;

type LayoutTypeKeys = keyof typeof LayoutTypes;
type LayoutType = typeof LayoutTypes[LayoutTypeKeys];

export const ProtectionTypes = {
    PRIVATE: "PRIVATE",
    PUBLIC: "PUBLIC",
    ADMIN: "ADMIN",
    NONE: "NONE"
} as const;

type ProtectionTypeKeys = keyof typeof ProtectionTypes;
type ProtectionType = typeof ProtectionTypes[ProtectionTypeKeys];

export interface IRouterRoutes {
    path: IRoute;
    Element: () => JSX.Element;
    layoutType?: LayoutType,
    protectionType?: ProtectionType,
}

export const RouterRoutes: IRouterRoutes[] = [
    {
        path: ROUTES.LOGIN,
        Element: LoginPage,
        protectionType: ProtectionTypes.PUBLIC
    },
    {
        path: ROUTES.REGISTER,
        Element: RegisterPage,
        protectionType: ProtectionTypes.PUBLIC
    },
    {
        path: ROUTES.QUESTIONS,
        Element: QuestionsPage,
    },
    {
        path: ROUTES.QUESTION_ID(),
        Element: QuestionPage,
    },
    {
        path: ROUTES.PROFILE,
        Element: ProfilePage,
        protectionType: ProtectionTypes.PRIVATE
    },
    {
        path: ROUTES.NOTIFICATIONS,
        Element: NotificationPage,
        protectionType: ProtectionTypes.PRIVATE
    },
    {
        path: ROUTES.ADD_QUESTION,
        Element: AddQuestionPage,
        protectionType: ProtectionTypes.PRIVATE
    },
    {
        path: ROUTES.RANKINGS,
        Element: RankingsPage,
    },
    {
        path: ROUTES.TAGS,
        Element: TagsPage,
    },
    {
        path: ROUTES.NOT_MATCHING,
        Element: QuestionPage,
    },
]