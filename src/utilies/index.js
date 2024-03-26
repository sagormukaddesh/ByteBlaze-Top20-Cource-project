import toast from "react-hot-toast";

export const getBlogs = () => {
    let blogs = [];
    let storedBlogs = localStorage.getItem('blogs')
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs)

    }
    return blogs
}

// save
export const saveBlog = blog => {
    let blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blog.id)
    if (isExist) {
        return toast.error('already bookmarked')
    }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs))
    toast.success('blog bookmarked Successfully')

}


// delete 
export const deleteBlogs = id => {
    let blogs = getBlogs();
    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Blog Removed from the Bookmark')
}