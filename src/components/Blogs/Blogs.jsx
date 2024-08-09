import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blog,setblog]=useState([]);
    useEffect(()=> {
     fetch('blogs.json')
     .then(res => res.json())
     .then(data => setblog(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">blog</h1>
        </div>
    );
};

export default Blogs;