import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/post`,
        { title, content },
        { withCredentials: true }
      );
      toast.success('Blog created')
      console.log(res);
    } catch (err) {
      if(err.response?.status == 400){
        toast.error(err.response.data.message)
      }
      else{
        alert('Blog creation failed')
      }
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={content}
        placeholder="write content"
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Create Blog</button>
    </form>
  );
};

export default CreatePost;
