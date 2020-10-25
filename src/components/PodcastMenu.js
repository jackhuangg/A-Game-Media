import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/PodcastMenu.css";
import unathletic from "../images/unathletic.jpeg";
import agametalks from "../images/agametalks.jpeg";


function PodcastMenu() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div className="Introduction">
        <h1 className="title">Podcasts</h1>
        <h3 class="responsive">
          For our audio story telling, we will be covering authentic stories
          ranging from interviews to just laid back conversations connecting
          personal experiences to topics in the news. Be sure to check out both
          our shows A-Game Talks & The UnAthletic.
        </h3>
      </div>
      <div className="DisplayCard">
        <div className="Card" id="left" data-aos="zoom-in" data-aos-delay="100">
          <a href="UnAthletic">
            <img alt="UnAthletic" src={unathletic}></img>
          </a>
        </div>
        <div
          className="Card"
          id="right"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <a href="A-Game-Talks">
            <img alt="A-Game-Talks" src={agametalks}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PodcastMenu;
