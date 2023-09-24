import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import imgtable from '../rectangle 4.svg'
import Collaborate from '../collaboration.svg'
import chatbot from '../chatbot.svg'
import plagrism from '../plagrism.svg'
import repository from '../repository.svg'
import "./styles/home.css";
import joinfirst from '../rectangle 11.svg'
import joinsecond from '../rectangle 15.svg'
import jointhird from '../rectangle 16.svg'
// import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="sahyog1">
        <div>
          <img src={imgtable} alt="" />
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
          <img src={Collaborate} alt="" />
          <h3>Collaboration</h3>
          <p>
            Integration with file-sharing services <br />
            allows teams to upload , edit , and <br /> Collaborate on documents.
          </p>
        </div>
        <div className="fluid">
          <img src={repository} alt="qwerty" />
          <h3>Repository/Database</h3>
          <p>
            There is a respository/database to <br /> taken up by universities.
          </p>
        </div>
        <div className="fluid">
          <img src={plagrism} alt="qwerty" />
          <h3>Plagiarism Check</h3>
          <p>
            Plagiarism check to help in <br /> maintaining academic and <br />{" "}
            professional integrity.
          </p>
        </div>
        <div className="fluid">
          <img src={chatbot} alt="qwerty" />
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
            <img src={joinfirst} alt=""  />
            <a href="" className="join">Join</a>
          </div>
          <div>
            <img src={joinsecond} alt="" />
            <a href="" className="join">Join</a>
          </div>
          <div>
            <img src={jointhird} alt="" />
            <a href="" className="join">Join</a>
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
              <img src={PhoneIcon} alt="phonekalogo" />
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
