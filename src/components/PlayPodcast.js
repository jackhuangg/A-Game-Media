import React from "react";
import ReactWebMediaPlayer from "react-web-media-player";
import { withRouter } from "react-router";
import "../styles/PlayPodcast.css";
import templogo from "../images/logo.jpeg";

function PlayPodcast(props) {
  let [
    podcasttitle,
    date,
    seasonep,
    logo,
    mp4link,
    shownotes,
  ] = props.location.state.text;
  return (
    <div className="MediaPlayer">
      <div className="audioplayer">
        <ReactWebMediaPlayer
          width={450}
          height={400}
          title={podcasttitle}
          thumbnail={templogo}
          audio={mp4link}
        />
      </div>
      <div className="content">
        <h2>{podcasttitle}</h2>
        <p>{date}</p>
        <h5>{shownotes}</h5>
      </div>
    </div>
  );
}

export default withRouter(PlayPodcast);
