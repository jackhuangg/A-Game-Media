import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BlogListTemplate from "./BlogListTemplate";
import "../styles/BlogList.css";
import db from "../firebase";

function BlogList() {
  const [BlogList, setBlogList] = useState([]);
  useEffect(() => {
    db.collection("blogs").onSnapshot((snapshot) =>
      setBlogList(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="Introduction">
        <h1>Recent Blogs</h1>
        <h3>
          Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Check out
          our Medium posts!
        </h3>
      </div>
      <div className="BlogList" data-aos="zoom-in">
        {BlogList.map((blog) => (
          <BlogListTemplate
            title={blog.title}
            summary={blog.summary}
            image={blog.image}
            url={blog.url}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
