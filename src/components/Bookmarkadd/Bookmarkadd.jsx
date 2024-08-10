
import PropTypes from 'prop-types'

const Bookmarkadd = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='m-2 bg-slate-200 p-4 rounded-2xl'>
            <h2 className='text-2xl'>{title}</h2>
        </div>
    );
};
Bookmarkadd.propTypes = {
    bookmark: PropTypes.object.isRequired,
}
export default Bookmarkadd;