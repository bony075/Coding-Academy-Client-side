import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Course/Course";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import CheckOut from "../../Pages/Shared/CheckOut/CheckOut";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://ccacademy.vercel.app/course')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://ccacademy.vercel.app/course')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://ccacademy.vercel.app/course-categories/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><Course></Course></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ccacademy.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            }


        ]
    },
    {
        path: "*",
        element: < PageNotFound />
    }
]);