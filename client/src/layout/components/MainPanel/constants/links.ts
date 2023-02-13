import ROUTES from '../../../../router/constants/routes';

export interface IPanelLink {
    content: string;
    to: string;
}

export const mustReadPosts: IPanelLink[] = [
    {
        content: "Please read rules before you start working on this platform",
        to: ROUTES.QUESTIONS,
    },
    {
        content: "Vision & Strategy of Alemhelp",
        to: ROUTES.QUESTIONS,
    }
]

export const featuredLinks: IPanelLink[] = [
    {
        content: "Alemhelp source-code on GitHub",
        to: ROUTES.QUESTIONS,
    },
    {
        content: "Golang best-practices",
        to: ROUTES.QUESTIONS,
    },
    {
        content: "Alemhelp School dashboard",
        to: ROUTES.QUESTIONS,
    }
]
