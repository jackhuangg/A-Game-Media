import React from 'react'
import '../styles/PodcastTemplate.css'
import playbutton from '../images/playbutton.png'
import companylogo from '../images/logo.jpeg'

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
            <div className="TemplateBox">
                <div className="PlayButtonSection">
                    <img src={playbutton}></img>
                </div>
                <div className="TitleDateSection">
                    <h2>{podcasttitle}</h2>
                    <p>{date}</p>
                </div>
                <div className="LogoSection">
                    <img src={companylogo}></img>
                </div>
            </div>
        </div>
    )
}

export default PodcastTemplate
