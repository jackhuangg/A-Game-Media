import React from "react";
import "../styles/Footer.css";
// import {fafacebook} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap'
import { Icon, InlineIcon } from "@iconify/react";
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';
import mediumSquareFilled from '@iconify/icons-ant-design/medium-square-filled'
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled';
import youtubeIcon from '@iconify/icons-vaadin/youtube';
import bxChevronRight from '@iconify/icons-bx/bx-chevron-right'
import bxlInstagram from '@iconify/icons-bx/bxl-instagram';

 
function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info footer-links">
                <h3 id="footertitle">
                  A-Game Media Co.
                </h3>
                <p>
                  Email: <a id="emaillink"href="mailto:agamemediaco@gmail.com">agamemediaco@gmail.com</a>
                </p>
                <div class="social-links mt-3">
                <a href="https://www.facebook.com/agamedmediaco/"><Icon icon={facebookFilled} width="40px"/></a>
                <a href="https://medium.com/@agamemediaco"><Icon icon={mediumSquareFilled} width="40px"/></a>
                <a href="https://www.youtube.com/channel/UCZImvq3Z_7h3HC1cXKmawMw"><Icon icon={youtubeIcon} width="40px"/></a>
                <a href="https://www.linkedin.com/company/a-game-media-co/"><Icon icon={linkedinFilled} width="40px"/></a>
                <a href="https://www.instagram.com/agamemediaco/?hl=en"><Icon icon={bxlInstagram} width="40px"/></a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4 id="footersubheader" style={{color:"grey"}}>Our Company</h4>
              <ul>
                <li>
                <Icon icon={bxChevronRight} width="30px" color="#ff7a00"/> <a href="/">Home</a>
                </li>
                <li>
                <Icon icon={bxChevronRight} width="30px" color="#ff7a00"/> <a href="About">About</a>
                </li>
                <li>
                <Icon icon={bxChevronRight} width="30px" color="#ff7a00"/><a href="Connect">Connect</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links" >
            <h4 id="footersubheader" style={{color:"grey"}}>Our Media</h4>
            <ul>
                <li>
                <Icon icon={bxChevronRight} width="30px" color="#ff7a00"/> <a href="Podcasts">Podcasts</a>
                </li>
                <li>
                <Icon icon={bxChevronRight} width="30px" color="#ff7a00"/> <a href="Blog">Blogs</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 bottompadding">
            <h4 id="footersubheader" style={{color:"grey"}}>Subscribe to our Newsletter</h4>
            <a href="http://eepurl.com/hdKp4b"><button className="subscribebutton" >Click Here</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright 2020 A-Game Media Co.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
