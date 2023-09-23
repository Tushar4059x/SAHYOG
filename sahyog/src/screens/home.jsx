import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import imgtable from '../img-1.png'
import "./styles/home.css";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="sahyog1">
        <div>
          <img src="fwd/Rectangle4.png" alt="" />
        </div>
        <div className="text">
          <h1>Sahyog</h1>
          <p>
            A user -friendly dashboard enabling project proposal <br />
            submission and seamless collaboration <br />
            for peer-to-peer learning.
          </p>
        </div>
      </div>
      <div className="sahyog2">
        <div className="fluid">
          <img src="/fwd/Live collaboration-cuate 1.png" alt="" />
          <h3>Collaboration</h3>
          <p>
            Integration with file-sharing services <br />
            allows teams to upload , edit , and <br /> Collaborate on documents.
          </p>
        </div>
        <div className="fluid">
          <img src="./fwd/Projections-cuate 1.png" alt="" />
          <h3>Repository/Database</h3>
          <p>
            There is a respository/database to <br /> taken up by universities.
          </p>
        </div>
        <div className="fluid">
          <img src="./fwd/Personal files-bro 1.png" alt="" />
          <h3>Plagiarism Check</h3>
          <p>
            Plagiarism check to help in <br /> maintaining academic and <br />{" "}
            professional integrity.
          </p>
        </div>
        <div className="fluid">
          <img src="./fwd/Chat bot-cuate 1.png" alt="" />
          <h3>Chatbot</h3>
          <p>
            Enables text-based interactions, <br /> enhancing customer support
            and <br /> content genration.
          </p>
        </div>
      </div>
      <div className="sahyog3">
        <div>
          <h2>Upcoming Events</h2>
        </div>
        <div className="images">
          <div>
            <img src="/fwd/Rectangle 11.png" alt="" />
            <a href="">Join</a>
          </div>
          <div>
            <img src="/fwd/Rectangle 15.png" alt="" />
            <a href="">Join</a>
          </div>
          <div>
            <img src="/fwd/Rectangle 16.png" alt="" />
            <a href="">Join</a>
          </div>
        </div>
      </div>
      <div className="sahyog4">
        <div>
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, <br />
            tenetur veniam saepe id dolore recusandae ipsam odio libero <br />
            distinctio.3
          </p>
          <div className="infos">
            <div>
              <img src="" alt="phonekalogo" />
            </div>
            <div>
              <h3>Phone</h3>
              <p>+00 110 111 000</p>
            </div>
          </div>
          <div className="infos">
            <div>
              <img src="" alt="mailkalogo" />
            </div>
            <div>
              <h3>Email</h3>
              <p>name.tutorial@gmail.com</p>
            </div>
          </div>
          <div className="infos">
            <div>
              <img src="" alt="phonekalogo" />
            </div>
            <div>
              <h3>Phone</h3>
              <p>X Street , Y Road , San Fransisco</p>
            </div>
          </div>
        </div>
        <div className="form">
          <div id="one">
            <input type="text" id="name" placeholder="Your Name"/>
            <input type="text" id="mail" placeholder="Email"/>
          </div>
          <div id="two">
            <input type="text" id="subject" placeholder="Subject"/>
          </div>
          <div id="three">
            <textarea name="" id="" cols="30" rows="10" placeholder="Say Something"></textarea>
          </div>
          <div id="four">
            <input type="submit" value='Send Message' />
          </div>
        </div>
      </div>
    </div>
  );
}
