import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";
import { deleteBlogs } from "../utilies";


const BlogCard = ({ blog, deleteAble, handleDelete }) => {
    const { cover_image, title, description, published_at, id } = blog;



    return (
        <div className="relative mt-12 hover:scale-105 max-w-sm mx-auto group  hover:no-underline  gap-10 focus:no-underline dark:bg-gray-50 transition border-2  border-primary hover:border-secondary border-opacity-30 ">
            <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" >
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {
                deleteAble && <div onClick={() => handleDelete(id)}
                    className="absolute bg-slate-300 hover:bg-slate-400 p-3 rounded-full hover:scale-105 -top-7 -right-5"><MdDeleteForever size={22} className="text-secondary group-hover:text-primary"></MdDeleteForever></div>
            }
        </div>
    );
};

export default BlogCard;