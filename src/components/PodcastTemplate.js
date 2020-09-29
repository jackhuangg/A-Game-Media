import React from "react";
import "../styles/PodcastTemplate.css";
import playbutton from "../images/playbutton.png";
import { Link } from "react-router-dom";

function PodcastTemplate({ podcasttitle, date, logo, mp4link, shownotes }) {
  console.log(logo);
  return (
    <div>
      <Link
        className="NoHover"
        to={{
          pathname: "/PlayPodcast",
          state: {
            text: [podcasttitle, date, logo, mp4link, shownotes],
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
            <img alt="companylogo" src={`/${logo}.jpeg`}></img>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default PodcastTemplate;
