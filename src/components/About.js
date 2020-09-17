import React from "react";
import "../styles/About.css"

function About() {
  return (
    <div id="padding">
      <div id="education-container">
        <h1>About A-Game Media</h1>
      </div>
      <div id="lower-education-container">
        <h4 id="color">Mission</h4>
        <p>To tell Authentic Stories that represent the Universal Language of Excellence</p>
        <h4 id="color">Company Values</h4>
        <ul>
          <li><p>Authenticity</p></li>
          <li><p>Persistence</p></li>
          <li><p>Diversity</p></li>
        </ul>
        <h4 id="color">Why & Vision</h4>
        <p>The concept of A-Game Media Co. was originally inspired back in 2017. However, 
          we have officially launched in January 2020, and haven’t looked back ever since.</p>
        <p>The inspiration for this venture came from a need in the media industry to be able to 
          tell stories in an authentic fashion. In a time where “clickbait”, and buzzwords drive 
          people’s attention toward content, the main intention of the content can be considered 
          an afterthought.  Another driving force is to create a platform where each individual 
          feels enabled and empowered to become the best version of themselves no matter what in 
          their lives. </p>
      </div>
    </div>
  );
}

export default About;
