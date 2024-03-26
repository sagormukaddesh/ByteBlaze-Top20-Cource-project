import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import BlogDetails from "../Pages/BlogDetails";
import Content from "../Components/Content";
import Author from "../Components/Author";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch(`https://dev.to/api/articles?per_page=20&top=7`)
            },
            {
                path: '/bookmarks',
                element: <Bookmarks></Bookmarks>
            },
            {
                path: '/blog/:blogId',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.blogId}`),
                children: [
                    {
                        index: true,
                        element: <Content></Content>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.blogId}`)
                    },
                    {
                        path: 'author',
                        element: <Author></Author>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.blogId}`)
                    }
                ]
            }
        ]
    },
]);