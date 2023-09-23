import React from 'react'

export default function Navbar() {
  return (
    <div className='navBar'>
        <img src={logo} ></img>
        <p className='hero-text'>SAHYOG</p>
        <input type='text' placeholder='Search Prjects, universities, events'></input>
        <div className='nav-buttons'>
          <button id='HOME'></button>
          <button id='MY-TASK'></button>
          <button id='EVENTS'></button>
          <button id='PROJECT'></button>
          <div id='vertical-ruler'></div>
          <button id='profile'></button>
        </div>
    </div>
  )
}
