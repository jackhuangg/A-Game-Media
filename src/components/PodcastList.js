import React, { useState, useEffect } from 'react'
import PodcastTemplate from './PodcastTemplate'
import db from '../firebase'

function PodcastList(props) {
    const [PodcastList,setPodcastList] = useState([]);
    useEffect(() => {
        db.collection(props.channel).onSnapshot(snapshot => (
            setPodcastList(snapshot.docs.map(doc => doc.data()))
        ))
    },)
    return (
        <div>
            {PodcastList.map(podcast => (
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
    )
}

export default PodcastList

