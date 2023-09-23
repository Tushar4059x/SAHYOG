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
        <div className="imgtable">
          <img  src={imgtable} alt="" />
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
