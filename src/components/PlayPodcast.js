import React from "react";
import ReactWebMediaPlayer from "react-web-media-player";
import { withRouter } from "react-router";
import "../styles/PlayPodcast.css";

function PlayPodcast(props) {
  let [
    podcasttitle,
    date,
    logo,
    mp4link,
    shownotes,
  ] = props.location.state.text;
  return (
    <div className="MediaPlayer">
      <div className="audioplayer">
        <ReactWebMediaPlayer
          width={300}
          height={300}
          title={podcasttitle}
          thumbnail={`/${logo}.jpeg`}
          audio={mp4link}
        />
      </div>
      <div className="content">
        <h2 id="font">{podcasttitle}</h2>
        <p>{date}</p>
        <h5>{shownotes}</h5>
      </div>
    </div>
  );
}

export default withRouter(PlayPodcast);
