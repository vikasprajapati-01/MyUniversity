import React , { useState } from 'react';

import Navbar from './Components/Navbar/Navbar.jsx'
import Minihome from './Components/Minihome/Minihome.jsx'
import Courses from './Components/Courses/Courses.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Review from './Components/Review/Review.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx'

function App() {

  const [playStatus, setPlayStatus] = useState(false);

  return (
    <>
      <Navbar />
      <Minihome />
      {/* here instead of giving each first div tag 'container' className we can assign this way */}
      <div className="container">
          <Title mainTitle='COURSES' subTitle='What We Provide' />
          <Courses />
          <About setPlayStatus={setPlayStatus}/>
          <Title mainTitle='GALLERY' subTitle='Our Campus Images' />
          <Campus />
          <Title mainTitle='REVIEW' subTitle='What Students Say' />
          <Review />
          <Title mainTitle='CONTACT US' subTitle='Reach Out To Us' />
          <Contact />
          <Footer />
      </div>
      <VideoPlayer playStatus={playStatus} setPlayStatus={setPlayStatus} />
    </>
  )
}

export default App
