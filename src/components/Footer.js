import React from "react";
import "../styles/Footer.css";
// import {fafacebook} from '@fortawesome/free-solid-svg-icons'
import facebook from "../images/facebook.png";

function Footer() {
  return (
    <footer>
      <div className="Icons">
        <ul>
          <li>
            <a href="https:/www.facebook.com">
              <img alt="facebook" src={facebook}></img>
            </a>
          </li>
          <li>
            <a href="https:/www.facebook.com">
              <img alt="linkedin" src={facebook}></img>
            </a>
          </li>
          <li>
            <a href="https:/www.facebook.com">
              <img alt="temp" src={facebook}></img>
            </a>
          </li>
          <li>
            <a href="https:/www.facebook.com">
              <img alt="temp" src={facebook}></img>
            </a>
          </li>
          <li>
            <a href="https:/www.facebook.com">
              <img alt="temp" src={facebook}></img>
            </a>
          </li>
        </ul>
        <p className="Copyright">
          © Copyright 2020. All Rights Reserved By A-Game Media Co.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
