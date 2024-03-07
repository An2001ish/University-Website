import React from 'react'
import "./Header.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Header = () => {
  return (
    <div className='header container'>
      <div className="header-text">
        <h1>Explore the endless possibilities for learning with us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptate culpa perferendis, quas expedita aspernatur ex dolorem sapiente vero excepturi ipsa aliquam earum deserunt.</p>
        <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Header
