
const ROUTES = {
    INDEX: "/",

    LOGIN: "/login",
    REGISTER: "/register",

    PROFILE: "/profile",
    NOTIFICATIONS: "/notifications",

    QUESTIONS: "/questions",
    ADD_QUESTION: "/questions/add",
    QUESTION_ID: (id?: string) => id ? `/questions/${id}` : "/questions/:id",

    TAGS: "/tags",
    RANKINGS: "/rankings",

    NOT_MATCHING: "*",
} as const;

export type IRoutesKeys = keyof typeof ROUTES;

export type IRoute = typeof ROUTES[IRoutesKeys] | string;

export default ROUTES;
