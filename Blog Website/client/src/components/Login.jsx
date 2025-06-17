import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleClick(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        data,
        { withCredentials: true }
      );
      toast.success('Logged In')
      console.log(res.data);
    } catch (err) {
      console.error(err);
      if(err.response?.status == 400){
        alert(err.response.data.message)
      }
      else{
        alert('login failed')
        console.error(err)
      }
    }
  }

  return (
    <form onSubmit={handleClick}>
      <div>
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
        <button>Login</button>
      </div>
    </form>
  );
};

export default Login;
