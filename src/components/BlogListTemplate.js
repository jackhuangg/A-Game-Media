import React from 'react'
import '../styles/BlogListTemplate.css'

function BlogListTemplate({
    title,
    summary,
    image,
})
 {
    return (
        <div className="BlogBlock">
            <img src={image}></img>
            <h1>{title}</h1>
            <p>{summary}</p>
        </div>
    )
}

export default BlogListTemplate
