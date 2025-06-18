import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-gray-300">
      <nav className="flex flex-row justify-between w-[92rem] mt-5 p-4">
        <div>
          <img className="h-22 rounded-full" src="/weblogo.png" alt="blog-logo" />
        </div>
        <div className="flex flex-row justify-around items-center w-60">
          <Link to={"/login"} className="">
            Sign In
          </Link>
          <Link to={"/register"} className="">
            Create Account
          </Link>
        </div>
      </nav>

      <div className="p-4 flex flex-col gap-5 justify-center items-center h-max w-[92rem]">
        <p className="text-7xl">WELCOME TO BLOGGISH</p>
        <p className="text-5xl">Your Blog Partner</p>
        <p className="text-3xl">Create and Grow</p>
        <Link className="border rounded-2xl pl-3.5 p-2 w-20">Create</Link>
      </div>

      <div className="p-4 pl-12 flex flex-col gap-5 justify-center w-[92rem] h-50">
          <p className="text-5xl">Create and Mangage your Blogs</p>
          <p className="text-3xl pl-6">Create Edit and Delete your Blogs</p>  
      </div>

      <div className="pl-12 flex flex-col justify-center gap-5 p-4 h-50 w-[92rem]">
        <p className="text-5xl">Project your great ideas and learnings in Blogs</p>
        <p className="text-3xl pl-6">Learn Create and Grow</p>
      </div>

      <div className="flex flex-col gap-5 justify-center items-center p-4 w-[92rem] h-max">
        <p className="text-5xl">Grow with People</p>
        <p className="text-3xl">Many people are growing with us</p>
      </div>
    </div>
  );
};

export default Home;
