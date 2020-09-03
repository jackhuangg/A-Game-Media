import React from "react";
import "../styles/BlogListTemplate.css";
//https://codepen.io/Gelsot/pen/xpGYyd

function BlogListTemplate({ title, summary, image, url }) {
  return (
    <div className="BlogBlock">
      <img alt="blogimg" src={image}></img>
      <h1>{title}</h1>
      <p>{summary}</p>
      <a href={url}>Read More...</a>
    </div>
  );
}

export default BlogListTemplate;
