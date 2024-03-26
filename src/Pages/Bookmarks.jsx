import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../utilies";
import BlogCard from "../Components/BlogCard";
import EmptyState from "../Components/EmptyState";



const Bookmarks = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, []);

    const handleDelete = id => {
        deleteBlogs(id)
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }
    if (blogs.length < 1) return <EmptyState massage='No Bookmarks Available' address='/blogs'level={'Go To Blogs'} ></EmptyState>

    return (
        <div className="grid justify-center px-4 sm:px-8 lg:px-12 py-8 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map(blog => <BlogCard handleDelete={handleDelete} deleteAble={true} key={blog.id} blog={blog}></BlogCard>)
            }

        </div>
    );
};

export default Bookmarks;