
const ROUTES = {
    INDEX: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    PROFILE: "/profile",
    ADD_QUESTION: "/posts/add",
    POSTS: "/posts",
    POSTS_ID: "/posts/:id",
    NOTIFICATIONS: "/notifications",
    TAGS: "/tags",
    RANKINGS: "/rankings",
    NOT_MATCHING: "*",
} as const

export default ROUTES;
