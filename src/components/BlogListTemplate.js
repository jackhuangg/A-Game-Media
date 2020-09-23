import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/BlogListTemplate.css";
//https://codepen.io/Gelsot/pen/xpGYyd

function BlogListTemplate({ title, summary, image, url }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="BlogBlock">
      <div className="imagediv">
        <img alt="blogimg" src={image}></img>
      </div>
      <h1>{title}</h1>
      <p>{summary}</p>
      <a href={url}>Read More...</a>
    </div>
  );
}

export default BlogListTemplate;
