import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleClick(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/register`,
        data,
        { withCredentials: true }
      );
      toast.success('User registered')
      navigate("/login");
      console.log(res.data);
    } catch (err) {
      if (err.response?.status == 400) {
        alert(err.response.data.message);
      } else {
        alert("Registration failed");
      }
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleClick}>
      <div>
        <input
          type="text"
          placeholder="enter username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="enter email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={handleChange}
        />
        <button>Register</button>
      </div>
    </form>
  );
};

export default Register;
