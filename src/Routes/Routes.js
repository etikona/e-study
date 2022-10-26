import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog";
import Checkout from "../Pages/Checkout";
import CourseDetails from "../Pages/CourseDetails";
import Courses from "../Pages/Courses";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signin from "../Pages/Signin";
import Header from "../Shared/Header";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
    path: '/',
    element: <Main/>,
    children: [
        {
       path: '/',
       element: <Home/>
    },
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
       element: <Courses/>,
       loader: () => fetch('https://e-study-server.vercel.app/courses')
    },
        {
       path: '/courses/:id',
       element: <CourseDetails/>,
       loader: ({params}) => fetch(`https://e-study-server.vercel.app/courses/${params.id}`)
    },
        {
       path: '/checkout',
       element: <PrivateRoute><Checkout/></PrivateRoute>
    //    loader: ({params}) => fetch(`https://e-study-server.vercel.app/courses/${params.id}`)
    },
]
},
{
    path: '*',
    element: <Error/>
}
])