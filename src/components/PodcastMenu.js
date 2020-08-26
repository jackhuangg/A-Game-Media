import React from 'react'
import '../styles/PodcastMenu.css'
import logo from '../images/logo.jpeg'

function PodcastMenu() {
    return (
        <div>
            <div className="Introduction">
                <h1>Podcasts</h1> 
                <h3>Lorem ipsum dolor sit amet, 
                    consect etur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna 
                    aliqua. Check out our two Podcast Channels!
                </h3>
            </div>
            <div className="DisplayCard">
                <div className="Card">
                    <a href="UnAthletic"><img src={logo}></img></a>
                    <p>UnAthletic</p>
                </div>
                <div className="Card">
                    <a href="A-Game-Talks"><img src={logo}></img></a>
                    <p>A-Game Talks</p>
                </div>
            </div>
        </div>
    )
}

export default PodcastMenu
