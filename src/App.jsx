import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="container">
      <Title subTitle = 'Our PROGRAM' title = 'What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle = 'Gallery' title = 'Campus Photos'/>
      <Campus/>
      <Title subTitle = 'TESTIMONIALS' title = 'What Our Students Say'/>
      <Testimonials/>
      </div>
    </div>
  )
}

export default App
