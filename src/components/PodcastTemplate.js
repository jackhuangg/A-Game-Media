import React from 'react'

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
            <h1>{podcasttitle}</h1>
            <p>{date}</p>
            <p>{seasonep}</p>
            <p>{logo}</p>
            <p>{mp4link}</p>
            <p>{shownotes}</p>
        </div>
    )
}

export default PodcastTemplate
