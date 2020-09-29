import React, { useState } from "react";
import "../styles/InputForm.css";
import "../styles/Admin.css";
import db from "../firebase";
import firebase from "firebase";

function Admin() {
  //PODCAST VARIABLES
  const [pickpodcast, setpodcast] = useState("");
  const [podcasttitle, setpodcasttitle] = useState("");
  const [podcastdate, setpodcastdate] = useState("");
  const [podcastlogo, setpodcastlogo] = useState("");
  const [podcastmp4, setpodcastmp4] = useState("");
  const [podcastshownotes, setpodcastshownotes] = useState("");
  //EVENT VARIABLES
  const [eventdate, seteventdate] = useState("");
  const [eventevent, seteventevent] = useState("");
  //BLOG VARIABLES
  const [title, settitle] = useState("");
  const [summary, setsummary] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [linkurl, setlinkurl] = useState("");

  const sendpodcast = (e) => {
    e.preventDefault();
    db.collection(pickpodcast).add({
      podcasttitle: podcasttitle,
      date: podcastdate,
      logo: podcastlogo,
      mp4link: podcastmp4,
      shownotes: podcastshownotes,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setpodcast("");
    setpodcasttitle("");
    setpodcastdate("");
    setpodcastlogo("");
    setpodcastmp4("");
    setpodcastshownotes("");
  };

  const sendevent = (e) => {
    e.preventDefault();
    db.collection("eventlist").add({
      date: eventdate,
      event: eventevent,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    seteventdate("");
    seteventevent("");
  };

  const sendblog = (e) => {
    e.preventDefault();
    db.collection("blogs").add({
      image: imageurl,
      summary: summary,
      title: title,
      url: linkurl,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setimageurl("");
    setsummary("");
    settitle("");
    setlinkurl("");
  };
  return (
    <div className="admin">
      {/* FORM FOR PODCAST SECTION */}
      <h1>Podcast Form</h1>
      <form>
        <h5>Pick a podcast category</h5>
        <select name="dropdown" onChange={(e) => setpodcast(e.target.value)}>
          <option value="agametalks">A-Game Talks</option>
          <option value="unathletic">UnAthletic</option>
        </select>
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
        <h5>Pick a podcast logo</h5>
        <select
          name="dropdown"
          onChange={(e) => setpodcastlogo(e.target.value)}
        >
          <option value="logo">Company Logo</option>
          <option value="wonsulting">Wonsulting Logo</option>
          <option value="unathletic">UnAthletic Logo</option>
        </select>
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
        <button className="button" onClick={sendpodcast} type="submit">
          Submit Form
        </button>
      </form>
      {/* FORM FOR EVENT LIST ON HOMEPAGE */}
      <h1>Event Form</h1>
      <form>
        <input
          onChange={(e) => seteventdate(e.target.value)}
          value={eventdate}
          placeholder="enter event date"
          type="text"
        />
        <input
          onChange={(e) => seteventevent(e.target.value)}
          value={eventevent}
          placeholder="enter short event description"
          type="text"
        />
        <button className="button" onClick={sendevent} type="submit">
          Submit Form
        </button>
      </form>
      {/* FORM FOR BLOG LIST */}
      <h1>Blog Form</h1>
      <form>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          placeholder="enter blog title"
          type="text"
        />
        <input
          maxLength="160"
          onChange={(e) => setsummary(e.target.value)}
          value={summary}
          placeholder="enter short summary for blog, 160 character limit"
          type="text"
        />
        <input
          onChange={(e) => setimageurl(e.target.value)}
          value={imageurl}
          placeholder="enter the url of the image"
          type="text"
        />
        <input
          onChange={(e) => setlinkurl(e.target.value)}
          value={linkurl}
          placeholder="enter the url of the medium post"
          type="text"
        />
        <button className="button" onClick={sendblog} type="submit">
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Admin;
