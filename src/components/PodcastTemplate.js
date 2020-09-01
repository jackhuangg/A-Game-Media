import React from "react";
import "../styles/PodcastTemplate.css";
import playbutton from "../images/playbutton.png";
import companylogo from "../images/logo.jpeg";

import { Link } from "react-router-dom";

function PodcastTemplate({
  podcasttitle,
  date,
  seasonep,
  logo,
  mp4link,
  shownotes,
}) {
  return (
    <div>
      <Link
        to={{
          pathname: "/PlayPodcast",
          state: {
            text: [podcasttitle, date, seasonep, logo, mp4link, shownotes],
          },
        }}
      >
        <div className="TemplateBox">
          <div className="PlayButtonSection">
            <img alt="playbutton" src={playbutton}></img>
          </div>
          <div className="TitleDateSection">
            <h2>{podcasttitle}</h2>
            <p>{date}</p>
          </div>
          <div className="LogoSection">
            <img alt="companylogo" src={companylogo}></img>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default PodcastTemplate;
