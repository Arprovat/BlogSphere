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
        <div>
            
        </div>
    );
};

export default Blogs;