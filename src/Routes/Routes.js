import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import FAQ from "../Pages/FAQ";
import Login from "../Pages/Login";
import Signin from "../Pages/Signin";
import Header from "../Shared/Header";

export const routes = createBrowserRouter([
    {
    path: '/',
    element: <Main/>,
    children: [
        {
       path: '/login',
       element: <Login/>
    },
        {
       path: '/register',
       element: <Signin/>
    },
        {
       path: '/blog',
       element: <Blog/>
    },
        {
       path: '/faq',
       element: <FAQ/>
    },
        {
       path: '/courses',
       element: <Courses/>
    }
]
}
])