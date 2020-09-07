import React from "react";
import ReactWebMediaPlayer from "react-web-media-player";
import { withRouter } from "react-router";
import "../styles/PlayPodcast.css";
import logo from "../images/logo.jpeg";

function PlayPodcast(props) {
  let [
    podcasttitle,
    date,
    seasonep,
    log,
    mp4link,
    shownotes,
  ] = props.location.state.text;
  console.log(mp4link);
  return (
    <div>
      {/* <ReactWebMediaPlayer
        width={300}
        height={300}
        title={podcasttitle}
        thumbnail={logo}
        audio={"gs://agamemedia-afa09.appspot.com/Mom's interview.mp3"}
        logo={{
          img: "https://nusid.net/your-logo.png",
          href: "https://www.npmjs.com/package/react-web-media-player",
        }}
      /> */}
      <p>In Progress</p>
    </div>
  );
}

export default withRouter(PlayPodcast);
