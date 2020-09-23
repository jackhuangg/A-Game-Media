import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BlogListTemplate from "./BlogListTemplate";
import "../styles/BlogList.css";
import db from "../firebase";

function BlogList() {
  const [BlogList, setBlogList] = useState([]);
  useEffect(() => {
    db.collection("blogs")
      .orderBy("createdAt", "desc")
      .limit(3)
      .onSnapshot((snapshot) =>
        setBlogList(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  console.log(BlogList);
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      <div className="Introduction">
        <h1>Recent Blogs</h1>
        <h3>
          A-Game Media Co has officially launched our written form of content.
          Currently, all of the stories can be found on Medium. From interviewee
          spotlights to any announcements, be sure to check it out!
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
