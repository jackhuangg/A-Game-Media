import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/PodcastMenu.css";
import logo from "../images/logo.jpeg";

function PodcastMenu() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div className="Introduction">
        <h1>Podcasts</h1>
        <h3 class="responsive">
          Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Check out
          our two Podcast Channels!
        </h3>
      </div>
      <div className="DisplayCard">
        <div className="Card" id="left" data-aos="zoom-in" data-aos-delay="100">
          <a href="UnAthletic">
            <img alt="UnAthletic" src={logo}></img>
          </a>
          <p>UnAthletic</p>
        </div>
        <div
          className="Card"
          id="right"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <a href="A-Game-Talks">
            <img alt="A-Game-Talks" src={logo}></img>
          </a>
          <p>A-Game Talks</p>
        </div>
      </div>
    </div>
  );
}

export default PodcastMenu;
