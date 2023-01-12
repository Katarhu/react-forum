
const ROUTES = {
    LOGIN: "/login",
    REGISTER: "/register",
    PROFILE: "/",
    ADD_QUESTION: "/posts/add",
    POSTS: "/posts",
    POSTS_ID: "/posts/:id",
    NOTIFICATIONS: "/notifications",
} as const

export default ROUTES;
