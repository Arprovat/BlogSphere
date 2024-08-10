import Bookmarkadd from "../Bookmarkadd/Bookmarkadd";
import PropTypes from 'prop-types';

const BookMark = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <div className=" ml-4 bg-gray-300 rounded-2xl  pt-4 pb-4 text-center">
                <h3 className="text-3xl">Reading Time: {readingTime}</h3>
            </div>
            <div className=" mt-4  pb-10 pt-4 ml-4 bg-gray-300">

                <h1 className="text-2xl  font-bold text-center">BookMark Blog: {bookmarks.length}</h1>
                {

                    bookmarks.map((bookmark, idx) => <Bookmarkadd
                        key={idx}
                        bookmark={bookmark}>
                    </Bookmarkadd>)
                }
                <div></div>
            </div>
        </div>
    );
};
BookMark.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,

}

export default BookMark;