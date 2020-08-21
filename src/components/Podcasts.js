import React, { useState, useEffect } from 'react'
import EachPodcast from './EachPodcast'
import db from '../firebase'

function Podcasts() {
    const [podcasts,setPodcasts] = useState([]);
    useEffect(() => {
        db.collection('podcasts').onSnapshot(snapshot => (
            setPodcasts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    return (
        <div>
            {podcasts.map(podcast => (
                <EachPodcast
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

export default Podcasts

