import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const PostDetails = () => {
  const [post, setPost] = useState("null");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/post/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  async function handleDelete() {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/post/${id}`, {
        withCredentials: true,
      });
      toast.warn('Blog deleted')
      navigate('/allpost');
    } catch (err) {
      console.log(err);
      alert("error in deleting");
    }
  }

  if (!post) return <div>LOADING...</div>;

  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <p>By {post.author?.username}</p>
        <p>{post.content}</p>
      </div>

      <div>
        <Link to={`/edit/${post._id}`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default PostDetails;
