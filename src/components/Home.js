import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Typist from "react-typist";
import "../styles/Home.css";
import db from "../firebase";
import logo from "../images/logo.jpeg";
import medium from "../images/medium.png";
import youtube from "../images/youtube.png";
import linkedin from "../images/linkedin.png";
import EventList from "./EventList";
import Table from "react-bootstrap/Table";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  const [Schedule, setSchedule] = useState([]);
  useEffect(() => {
    db.collection("eventlist")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setSchedule(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  return (
    <div>
      <div className="Intro">
        <Typist>
          <p>Universal</p>
          <Typist.Delay ms={100} />
          <p>
            Language <span id="SpanColor">of</span>
          </p>
          <Typist.Delay ms={100} />
          <p>Excellence</p>
        </Typist>
        <div className="undertitle">
          <p data-aos="fade-left" data-aos-delay="2700">
            Sports
          </p>
          <p data-aos="fade-left" data-aos-delay="2800">
            Business
          </p>
          <p data-aos="fade-left" data-aos-delay="2900">
            Entertainment
          </p>
          <p data-aos="fade-left" data-aos-delay="2900">
            Technology
          </p>
        </div>
      </div>
      <div className="About">
        <p>Who are we?</p>
        <div className="AboutSection" data-aos="fade-up">
          <h3>
            A start-up digital media company focused on content production
            across business, technology & sports. A-Game represents the
            universal language of bringing the best out of any situation. Our
            initial focus is on producing content in the form of podcasts, video
            blogs with plans of expanding into other forms of content.
          </h3>
          <img alt="logo" src={logo}></img>
        </div>
      </div>
      <div className="Work">
        <p>Check out our platforms!</p>
        <div className="WorkCard">
          <a href="https://medium.com/@agamemediaco">
            <div className="EachCard" data-aos="zoom-in" data-aos-delay="100">
              <img alt="medium" src={medium}></img>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UCZImvq3Z_7h3HC1cXKmawMw">
            <div
              className="EachCard"
              id="Middle"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img alt="youtube" src={youtube}></img>
            </div>
          </a>
          <a href="https://www.linkedin.com/company/a-game-media-co/">
            <div className="EachCard" data-aos="zoom-in" data-aos-delay="300">
              <img alt="linkedin" src={linkedin}></img>
            </div>
          </a>
        </div>
      </div>
      <div className="Connect">
        <p>Upcoming Events</p>
        <div className="eventlist">
          <Table responsive="sm" id="color">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {Schedule.map((event) => (
                <tr>
                  <td>{event.date}</td>
                  <td>{event.event}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <EventList />
      </div>
    </div>
  );
}

export default Home;
