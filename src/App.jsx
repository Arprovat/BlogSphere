
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMark from './components/BookMark/BookMark'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setbookmarks] = useState([]);
  const [readingTime, setreadingtime] = useState(0);

  const handleReadingTime = time => {
    setreadingtime(readingTime+time);
  }

  const handletoBookmark = blog => {
    const newbookmarks = [...bookmarks, blog];
    setbookmarks(newbookmarks);
  }


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto mt-10'>
        <Blogs handleReadingTime={handleReadingTime}
          handletoBookmark={handletoBookmark}>
        </Blogs>
        <BookMark
          readingTime={readingTime}
          bookmarks={bookmarks}>
        </BookMark>
      </div>


    </>
  )
}

export default App
