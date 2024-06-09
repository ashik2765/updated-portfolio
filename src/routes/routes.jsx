import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"blogs",
                element:<Blogs></Blogs>
            }
        ]
    },
]);