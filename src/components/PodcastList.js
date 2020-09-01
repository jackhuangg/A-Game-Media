import React, { useState, useEffect } from "react";
import PodcastTemplate from "./PodcastTemplate";
import "../styles/PodcastList.css";
import db from "../firebase";

function PodcastList(props) {
  const [PodcastList, setPodcastList] = useState([]);
  useEffect(() => {
    db.collection(props.channel).onSnapshot((snapshot) =>
      setPodcastList(snapshot.docs.map((doc) => doc.data()))
    );
  });
  return (
    <div>
      <div className="AlignOuterBox">
        <div className="OuterBox">
          <h3>Recent Episodes</h3>
          <div className="InnerBox">
            {PodcastList.map((podcast) => (
              <PodcastTemplate
                podcasttitle={podcast.podcasttitle}
                date={podcast.date}
                seasonep={podcast.seasonep}
                logo={podcast.logo}
                mp4link={podcast.mp4link}
                shownotes={podcast.shownotes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastList;
