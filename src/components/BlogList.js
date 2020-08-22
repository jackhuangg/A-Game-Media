import React, { useState, useEffect } from 'react'
import BlogListTemplate from './BlogListTemplate'
import '../styles/BlogList.css'
import db from '../firebase'

function BlogList() {
    const [BlogList,setBlogList] = useState([]);
    useEffect(() => {
        db.collection('blogs').onSnapshot(snapshot => (
            setBlogList(snapshot.docs.map(doc => doc.data()))
        ))
    },)
    return (
        <div>
            <div className="Introduction">
                <h1>Recent Blogs</h1> 
                <h3>Lorem ipsum dolor sit amet, 
                    consect etur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna 
                    aliqua. Check out our Medium posts!
                </h3>
            </div>
            <div className="BlogList">
                {BlogList.map(blog => (
                    <BlogListTemplate
                    title = {blog.title}
                    summary = {blog.summary}
                    image = {blog.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default BlogList
