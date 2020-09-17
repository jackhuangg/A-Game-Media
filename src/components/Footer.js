import React from "react";
import "../styles/Footer.css";
// import {fafacebook} from '@fortawesome/free-solid-svg-icons'
import facebook from "../images/facebook.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3 style={{fontsize:"16px"}}>
                  A-Game Media Co.
                </h3>
                <p>
                  Email: info@example.com<br />
                </p>
                {/* <div class="social-links mt-3">
                  <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                  <a href="#" class="facebook"
                    ><i class="bx bxl-facebook"></i
                  ></a>
                  <a href="#" class="instagram"
                    ><i class="bx bxl-instagram"></i
                  ></a>
                  <a href="#" class="google-plus"
                    ><i class="bx bxl-skype"></i
                  ></a>
                  <a href="#" class="linkedin"
                    ><i class="bx bxl-linkedin"></i
                  ></a>
                </div> */}
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="./pages/education/education.html">Education</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="./assets/pdf/Annual_Calendar.pdf">Events</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="./assets/pdf/TempleGuide.pdf">Temple Information</a>
                </li>
              </ul>
            </div>


            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join the Newsletter</h4>
              <p>Email:</p>
              <form action="" method="post">
                <input type="email" name="email" /><input
                  type="submit"
                  value="Subscribe"
                />
              </form>
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
