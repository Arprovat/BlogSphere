
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog,handletoBookmark,handleReadingTime }) => {
    const { title, cover_img, Read_time, post_date, author_img, hashtag,author_name } = blog;
    return (
        <div className='mb-20 w-411 bg-gray-200'>
            <img className='h-70 w-250' src={cover_img} alt={`cover image of the ${title}`} />
            <div className="flex justify-between">
                <div className='flex mt-3'>
                    <div >
                        <img className='w-14 h-14' src={author_img} alt="" />
                    </div>
                    <div className='pl-2'>
                        <h4 className="text-2xl ">{author_name}</h4>
                        <h3 className='text-1xl'>{post_date}</h3>
                    </div>

                </div>
                <div className='justify-center'>
                    <span>{Read_time} min read</span>
                    <button onClick={()=>handletoBookmark(blog)} className='ml-2 mt-2 mr-2 text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl mt-5'>{title}</h1>
           <p className='mt-4'>{
                hashtag.map((hash,idx)=> <span className='pt-10 pr-5 text-gray-500' key={idx}>{hash}</span>)
            }</p> 
            <br/>
            <button onClick={()=>handleReadingTime(Read_time)} className='text-red-600 font-bold underline mt-3 ml-4 mb-4'>mark as read</button>

        </div>
    );

};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handletoBookmark:PropTypes.func,
    handleReadingTime: PropTypes.func,
}

export default Blog;