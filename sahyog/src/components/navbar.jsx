import React from 'react';
import sahyoglogo from '../sahyog-logo.svg'
import {  Fab } from "@mui/material";


function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      backgroundColor : "#010536"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center"
      }}>
        <img src={sahyoglogo} alt="nothing" height={80} />
        <div style={{
          marginLeft: 10,
          fontSize: 30,
          fontWeight: 400,
          color: 'white',
          fontFamily : "Montserrat"
        }}>
          SAHYOG
        </div>
      </div>

      <div style={{
        marginTop : 25
      }} >
        <Fab variant="extended" size="small" color="primary" 
        style={{marginRight : 30,
                color : 'black',
                backgroundColor: 'white'}}>
          Home
        </Fab>
        <Fab variant="extended" size="small" color="primary"
        style={{marginRight : 30,
          color : 'black',
          backgroundColor: 'white'}}>
        Project
        </Fab>
        
        <Fab variant="extended" size="small" color="primary"
        style={{marginRight : 30,
          color : 'black',
          backgroundColor: 'white'}}>
        Events
        </Fab>
        
        <Fab variant="extended" size="small" color="primary"
        style={{marginRight : 80,
          color : 'black',
          backgroundColor: 'white'}}>
        Contact
        </Fab>
        
        <Fab variant="extended" size="small" color="primary"
        style={{marginRight : 30,
          color : 'black',
          backgroundColor: 'white'}}>
        SignUp
        </Fab>
        <Fab href='../screens/login.jsx' variant="extended" size="small" color="primary"
        style={{marginRight : 80,
          color : 'black',
          backgroundColor: 'white'}}>
          </Fab>
      </div>
    </div>
  );
}

export default Navbar;
