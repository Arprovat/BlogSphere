import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handletoBookmark, handleReadingTime }) => {
    const [blogs, setblogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setblogs(data))
    }, []);
    return (
        <div className="md:w-2/3">

            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    handleReadingTime={handleReadingTime}
                    handletoBookmark={handletoBookmark}
                    blog={blog}>

                </Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {

    handletoBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func,
}

export default Blogs;