import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Typist from "react-typist";
import "react-typist/dist/standalone/Typist.js";
import "../styles/Home.css";
import logo from "../images/logo.jpeg";
import medium from "../images/medium.png";
import youtube from "../images/youtube.png";
import linkedin from "../images/linkedin.png";
import InputForm from "./InputForm";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Typist>
        <div className="Intro">
          <p>Universal</p>
          <Typist.Delay ms={300} />
          <p>
            Language <span id="SpanColor">of</span>
          </p>
          <Typist.Delay ms={300} />
          <p>Excellence</p>
        </div>
      </Typist>
      <div className="About">
        <p>Who are we?</p>
        <div className="AboutSection" data-aos="fade-up">
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
          <div className="EachCard" data-aos="zoom-in" data-aos-delay="100">
            <img alt="medium" src={medium}></img>
          </div>
          <div
            className="EachCard"
            id="Middle"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img alt="youtube" src={youtube}></img>
          </div>
          <div className="EachCard" data-aos="zoom-in" data-aos-delay="300">
            <img alt="linkedin" src={linkedin}></img>
          </div>
        </div>
      </div>
      <div className="Connect">
        <p>Get in Touch</p>
        <div className="InputForm">
          <InputForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
