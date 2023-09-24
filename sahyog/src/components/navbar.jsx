import React from 'react';
import sahyoglogo from '../sahyog-logo.svg'
import { Typography, Button, Fab } from "@mui/material";


function navbar() {
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
        MyTask
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
        Projects
        </Fab>
        
        <Fab variant="extended" size="small" color="primary"
        style={{marginRight : 30,
          color : 'black',
          backgroundColor: 'white'}}>
        SignUp
        </Fab>
        <Fab variant="extended" size="small" color="primary"
        style={{marginRight : 80,
          color : 'black',
          backgroundColor: 'white'}}>
        LogIn
        </Fab>
      </div>
    </div>
  );
}

export default navbar;
