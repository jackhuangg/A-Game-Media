import React, {useState } from 'react'
import db from '../firebase'

function Admin() {
    const [podcasttitle, setpodcasttitle] = useState('')
    const [podcastdate, setpodcastdate] = useState('')
    const [podcastseasonep, setpodcastseasonep] = useState('')
    const [podcastlogo, setpodcastlogo] = useState('')
    const [podcastmp4, setpodcastmp4] = useState('')
    const [podcastshownotes, setpodcastshownotes] = useState('')

    const sendpodcast = e =>{
        e.preventDefault();
        db.collection('podcasts').add({
            podcasttitle:podcasttitle,
            date:podcastdate,
            seasonep:podcastseasonep,
            logo:podcastlogo,
            mp4link:podcastmp4,
            shownotes:podcastshownotes
        })
        setpodcasttitle('')
        setpodcastdate('')
        setpodcastseasonep('')
        setpodcastlogo('')
        setpodcastmp4('')
        setpodcastshownotes('')
    }

    return (
        <div>
          <form>
              <input
              onChange={(e) => setpodcasttitle(e.target.value)}
              value={podcasttitle}
              placeholder="input podcast title"
              type="text"
              />
              <input
              onChange={(e) => setpodcastdate(e.target.value)}
              value={podcastdate}
              placeholder="input podcast date"
              type="text"
              />
              <input
              onChange={(e) => setpodcastseasonep(e.target.value)}
              value={podcastseasonep}
              placeholder="input podcast season and episode"
              type="text"
              />
              <input
              onChange={(e) => setpodcastlogo(e.target.value)}
              value={podcastlogo}
              placeholder="input podcast logo"
              type="text"
              />
              <input
              onChange={(e) => setpodcastmp4(e.target.value)}
              value={podcastmp4}
              placeholder="input podcast mp4"
              type="text"
              />
              <input
              onChange={(e) => setpodcastshownotes(e.target.value)}
              value={podcastshownotes}
              placeholder="input podcast shownotes"
              type="text"
              />
              <button onClick={sendpodcast}type="submit">Submit Form</button>
          </form>
        </div>
    )
}

export default Admin
