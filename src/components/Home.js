import React from "react";
import "../styles/Home.css";
import logo from "../images/logo.jpeg";
import medium from "../images/medium.png";
import youtube from "../images/youtube.png";
import linkedin from "../images/linkedin.png";

function Home() {
  return (
    <div>
      <div className="Intro">
        <p>Universal</p>
        <p>
          Language <span id="SpanColor">of</span>
        </p>
        <p>Excellence</p>
      </div>
      <div className="About">
        <p>Who are we?</p>
        <div className="AboutSection">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h2>
          <img alt="logo" src={logo}></img>
        </div>
      </div>
      <div className="Work">
        <p>Check out our platforms!</p>
        <div className="WorkCard">
          <div className="EachCard">
            <img alt="medium" src={medium}></img>
          </div>
          <div className="EachCard" id="Middle">
            <img alt="youtube" src={youtube}></img>
          </div>
          <div className="EachCard">
            <img alt="linkedin" src={linkedin}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
