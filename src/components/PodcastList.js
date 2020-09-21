import React, { useState, useEffect } from "react";
import PodcastTemplate from "./PodcastTemplate";
import "../styles/PodcastList.css";
import db from "../firebase";

function PodcastList(props) {
  const [PodcastList, setPodcastList] = useState([]);
  useEffect(() => {
    db.collection(props.channel).orderBy('createdAt','desc').onSnapshot((snapshot) =>
      setPodcastList(snapshot.docs.map((doc) => doc.data()))
    );
  }, [props.channel]);
  return (
    <div>
      <div className="AlignOuterBox">
        <div className="OuterBox">
          <h1 id="centertitle">{props.title}</h1>
          <h3 className="responsive">{props.summary}</h3> 
          {/* these values are set in app.js since both podcast use the same components */}
          <p id="toppadding">Recent Episodes</p>
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
