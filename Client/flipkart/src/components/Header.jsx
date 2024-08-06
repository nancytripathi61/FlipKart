import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'/>
        <input id="inp"  type='text' placeholder='Search for Products,Brand and more'/>
        <a href="">Login</a>
         <a href="">Signup</a>
         <a href="">Become a Seller</a>
      </nav>
    </div>
  )
}

export default Header
