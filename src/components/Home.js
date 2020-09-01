import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <div className="Intro">
        <p>Universal</p>
        <p>
          Language <span style={{ color: "#FF7A00" }}>of</span>
        </p>
        <p>Excellence</p>
      </div>
      <div className="About">
        <p>Who are we?</p>
      </div>
    </div>
  );
}

export default Home;
