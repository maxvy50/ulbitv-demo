import AboutPage from "../NavPages/AboutPage";
import PostsPage from "../NavPages/PostsPage";
import PostIdPage from "../NavPages/PostIdPage";
import ErrorPage from "../NavPages/ErrorPage";
import LoginPage from "../NavPages/LoginPage";

export const privateRoutes = [
    {path: '/about', component: AboutPage, exact: true},
    {path: '/posts', component: PostsPage, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '/error', component: ErrorPage, exact: true},
];
export const publicRoutes = [
    {path: '/about', component: AboutPage, exact: true},
    {path: '/login', component: LoginPage, exact: true},
    {path: '/error', component: ErrorPage, exact: true},
];