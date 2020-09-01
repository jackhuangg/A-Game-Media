import React from "react";
import { withRouter } from "react-router";
import "../styles/PlayPodcast.css";

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
    <div>
      <h1>{podcasttitle}</h1>
      <h1>{date}</h1>
    </div>
  );
}

export default withRouter(PlayPodcast);
