import React from 'react';
import sahyoglogo from './assets/sahyog-logo.svg'
import { Typography, Button, Fab } from "@mui/material";
import logo from '
import './navbar.css'


function navBar() {
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

export default AppBar;