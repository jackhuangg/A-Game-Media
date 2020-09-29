import React from "react";
import "../styles/Connect.css";
import logo from "../images/linktree.png";

function Connect() {
  return (
    <div className="connectpage">
      <a href="https://linktr.ee/agamemediaco">
        <img alt="linktree" src={logo}></img>
      </a>
      <h1>
        If you are interested in learning more about A-Game, please feel free to
        check our Linktree for more updates on content releases and all things
        A-Game related.<br></br>For any business inquiries email us at{" "}
        <a id="email" href="mailto:agamemedia@gmail.com">
          agamemediaco@gmail.com
        </a>
      </h1>
    </div>
  );
}

export default Connect;
