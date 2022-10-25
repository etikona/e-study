import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Header from "../Shared/Header";

export const routes = createBrowserRouter([
    {
    path: '/',
    element: <Main/>,
    children: [{
       
    }]
}
])