import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { FaBookBookmark } from "react-icons/fa6";
import { saveBlog } from "../utilies";

const BlogDetails = () => {

    const [tabsIndex, setTabsIndex] = useState(0);

    const handleBookmark = (blog) => {
        saveBlog(blog)
    }


    const blog = useLoaderData();
    const { published_at, comment_count, reading_time_minutes, public_reactions_count, } = blog;
    return (
        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl"></h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                        <p className="text-sm">{reading_time_minutes} min read, {' '}
                            {new Date(published_at).toLocaleDateString()}</p>

                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comment_count || 0} comments •{' '} {public_reactions_count} Views</p>
                    </div>
                </div>
                {/* tabs */}
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <Link
                        to=''
                        onClick={() => setTabsIndex(0)}
                        rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabsIndex === 1 ? 'border border-red-500 border-b-0' : 'border-red-500 border-b'} dark:border-gray-600 dark:text-gray-600`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Content</span>
                    </Link>
                    <Link
                        to={`author`}
                        onClick={() => setTabsIndex(1)}
                        rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabsIndex === 0 ? 'border border-red-500 border-b-0' : 'border-red-500 border-b'} dark:border-gray-600 dark:text-gray-600`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Author</span>
                    </Link>

                    {/* bookmark btn */}
                    <div onClick={() => handleBookmark(blog)}
                        className="bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden">
                        <FaBookBookmark size={20} className="text-secondary"></FaBookBookmark>
                    </div>

                </div>
                <Outlet></Outlet>
            </article>
            <div>

            </div>
        </div>
    );
};

export default BlogDetails;