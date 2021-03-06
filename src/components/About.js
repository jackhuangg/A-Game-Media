import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";
import Ahdi from "../images/ahdi.jpg";
import Ahira from "../images/ahira.jpg";
import Ananya from "../images/ananya.jpg";
import Florentino from "../images/florentino.jpg";
import Jack from "../images/jack.jpg";
import linkedinlogo from '../images/linkedinlogo.png'

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div id="padding">
      <div id="education-container">
        <h1 className="title">About Us</h1>
      </div>
      <div id="lower-education-container">
        <div className="left">
          <h4 id="color">Mission</h4>
          <p id="about">
            To tell Authentic Stories that represent the Universal Language of
            Excellence.
          </p>
          <h4 id="color">Company Values</h4>
          <div className="values">
            <div>
              <ul>
                <li>
                  <p>Authenticity</p>
                </li>
                <li>
                  <p>Persistence</p>
                </li>
                <li>
                  <p>Diversity</p>
                </li>
              </ul>
            </div>
            <div className="valuesend">
              <ul>
                <li>
                  <p>Community</p>
                </li>
                <li>
                  <p>Integrity</p>
                </li>
                <li>
                  <p>Compassion</p>
                </li>
              </ul>
            </div>
          </div>
          
          
        </div>
        <div className="right">
          <h4 id="color">Why & Vision</h4>
          <p id="about">
            The concept of A-Game Media Co. was originally inspired back in
            2017. However, we have officially launched in January 2020, and
            haven’t looked back ever since.
          </p>
          <p id="about">
            The inspiration for this venture came from a need in the media
            industry to be able to tell stories in an authentic fashion. In a
            time where “clickbait”, and buzzwords drive people’s attention
            toward content, the main intention of the content can be considered
            an afterthought. Another driving force is to create a platform where
            each individual feels enabled and empowered to become the best
            version of themselves no matter what in their lives.
          </p>
        </div>
      </div>
      <div id="education-container">
        <h1 className="title">Meet The Team</h1>
      </div>
      <div className="employee">
        <div className="eachemployee" data-aos="fade-in" data-aos-delay="200">
          <Card className="cards">
              <Card.Img variant="top" src={Ahdi} />
              <a className="btn" href="https://www.linkedin.com/in/ahdithanu/"><img src={linkedinlogo} alt="logo" width="70px"/></a>
              <Card.Body>
              <Card.Title className="font">Ahdithan U</Card.Title>
              <Card.Title className="font" style={{ fontSize: "15px" }}>
                Co-Founder & Podcast Host
              </Card.Title>
              <Card.Text className="font">
                I bring out my A-Game by constantly pushing myself to new limits
                and holding myself accountable.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="eachemployee" data-aos="fade-in" data-aos-delay="300">
          <Card className="cards">
              <Card.Img variant="top" src={Ahira} />
              <a className="btn" href="https://www.linkedin.com/in/ahira-foster-47b082a1/"><img src={linkedinlogo} alt="logo" width="70px"/></a>
            <Card.Body>
              <Card.Title className="font">Ahira F</Card.Title>
              <Card.Title className="font" style={{ fontSize: "15px" }}>
                Co-Founder & Podcast Host
              </Card.Title>
              <Card.Text className="font">
                My family brings out my A-Game. I am forever grateful for the
                sacrifices they made for me to be in this position.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="eachemployee" data-aos="fade-in" data-aos-delay="400">
          <Card className="cards"> 
              <Card.Img variant="top" src={Ananya} />
              <a className="btn" href="https://www.linkedin.com/in/ananya-v/"><img src={linkedinlogo} alt="logo" width="70px"/></a>
            <Card.Body>
              <Card.Title className="font">Ananya V</Card.Title>
              <Card.Title className="font" style={{ fontSize: "15px" }}>
                Business Operations
              </Card.Title>
              <Card.Text className="font">
                I bring out my A-Game by focusing on my goals and taking
                advantage of opportunities.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="eachemployee" data-aos="fade-in" data-aos-delay="500">
          <Card className="cards">    
              <Card.Img variant="top" src={Florentino} />
              <a className="btn" href="https://www.linkedin.com/in/florentinolopez/"><img src={linkedinlogo} alt="logo" width="70px"/></a>
            <Card.Body>
              <Card.Title className="font">Florentino L</Card.Title>
              <Card.Title className="font" style={{ fontSize: "15px" }}>
                Creative Design
              </Card.Title>
              <Card.Text className="font">
                I bring out my A-Game by putting my mind, heart, and soul into
                everything that I do.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="eachemployee" data-aos="fade-in" data-aos-delay="600">
          <Card className="cards">
              <Card.Img variant="top" src={Jack} />
              <a className="btn" href="https://www.linkedin.com/in/jackhuang0409/"><img src={linkedinlogo} alt="logo" width="70px"/></a>
            <Card.Body>
              <Card.Title className="font">Jack H</Card.Title>
              <Card.Title className="font" style={{ fontSize: "15px" }}>
                Web Developer
              </Card.Title>
              <Card.Text className="font">
                I bring out my A-Game by seizing every opportunity I get and
                reflecting on my professional development.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
