import React from 'react'
import { Link } from "react-router-dom";

const Postcard = ({post}) => {
  return (
    <div>

        <h2>{post.title}</h2>
        <p>By {post.author?.username}</p>
        <p>{post.content.slice(0, 100)}</p>
        <Link to={`/post/${post._id}`}>Read more</Link>
      
    </div>
  )
}

export default Postcard
