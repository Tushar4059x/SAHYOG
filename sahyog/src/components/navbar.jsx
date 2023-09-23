import React from 'react'
import './styles/navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <img src="." alt="" />
      </div>
      <div className="search">
        <input type="text" />
      </div>
      <ul className='nav-items'>
        <li><a href="" className='active'>Home</a></li>
        <li><a href="">Product</a></li>
        <li><a href="">Events</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  )
}
