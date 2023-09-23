import React from "react";
import Navbar from "../components/Navbar";
import {Link} from 'react-router-dom'
import './styles/home.css'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="sahyog1">
        <img src="" alt="" />
        <h1>Sahyog</h1>
        <p></p>
      </div>  
      <div className="sahyog2">
        <div>
          <img src="/" alt="" />
          <h3>Collaboration</h3>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Repository/Database</h3>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Plagiarism Check</h3>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Chatbot</h3>
        </div>
      </div>
      <div className="sahyog3">
        <h2>Upcoming Events</h2>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
