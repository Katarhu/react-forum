import ROUTES from '../../../../router/routes';

export interface IPanelLink {
    content: string;
    to: string;
}

export const mustReadPosts: IPanelLink[] = [
    {
        content: "Please read rules before you start working on this platform",
        to: ROUTES.POSTS,
    },
    {
        content: "Vision & Strategy of Alemhelp",
        to: ROUTES.POSTS,
    }
]

export const featuredLinks: IPanelLink[] = [
    {
        content: "Alemhelp source-code on GitHub",
        to: ROUTES.POSTS,
    },
    {
        content: "Golang best-practices",
        to: ROUTES.POSTS,
    },
    {
        content: "Alemhelp School dashboard",
        to: ROUTES.POSTS,
    }
]