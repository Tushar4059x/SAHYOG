import React from 'react';
import sahyoglogo from "./sahyoglogo"
import { Typography, Button, Fab } from "@mui/material";


function AppBar() {
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
          fontSize: 35,
          fontWeight: 40,
          color: 'white'
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

export default AppBar;