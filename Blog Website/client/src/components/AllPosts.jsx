import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Postcard from "./Postcard";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/post`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Your Blogs</h1>
      {posts.map(post => (
        <Postcard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default AllPosts;
