import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden text-white">

      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-screen pt-24 pb-32 bg-cover bg-center bg: url('/background.webp')">
        

        {/* CONTENT FULL WIDTH */}
        <div className="relative w-full px-4 md:px-10 text-center">

          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to My Website
          </h1>

          <p className="mt-4 text-lg">
            This is a modern React website with routing and components.
          </p>

          <p className="mt-2">
            Explore About, Blog, Portfolio and more.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">

            <button
              onClick={() => navigate("/portfolio")} className="relative overflow-hidden border-2 border-black px-6 py-2 rounded group">
              <span className="relative z-10 group-hover:text-black transition">Portfolio</span>
              <span className="absolute left-0 bottom-0 w-full h-0 bg-yellow-600 transition-all duration-500 group-hover:h-full "></span>
            </button>

            <button
              onClick={() => navigate("/achievement")} className="relative overflow-hidden border-2 border-black px-6 py-2 rounded group">
              <span className="relative z-10 group-hover:text-black transition ">Achievement</span>
              <span className="absolute left-0 bottom-0 w-full h-0 bg-orange-400 transition-all duration-500 group-hover:h-full"></span>
            </button>

          </div>

        </div>

        {/* FEATURE SECTION */}
<div className="bg-white text-black w-full py-16 px-4 md:px-10">

  <h2 className="text-center text-3xl font-bold mb-10">
    What I Do
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="p-6 shadow-lg rounded-lg hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
      <p>React, Tailwind CSS, Bootstrap modern UI design.</p>
    </div>

    <div className="p-6 shadow-lg rounded-lg hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-2">Backend Development</h3>
      <p>Node.js, Django, REST APIs and database handling.</p>
    </div>

    <div className="p-6 shadow-lg rounded-lg hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
      <p>Clean, modern and user-friendly interface design.</p>
    </div>

  </div>
</div>



        {/* CURVE FULL WIDTH */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="block w-full [h-100]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
             d="M0,120 C360,200 1080,40 1440,120 L1440,320 L0,320 Z"
              className="fill-orange-400"
            />
          </svg>
        </div>

      </div>

      {/* WHITE SECTION FULL WIDTH */}
      <div className="bg-orange-400 text-black w-full py-8 px-4 md:px-10 text-center">
        <h2 className="text-3xl font-bold">Explore More Sections</h2>
        <p className="mt-2">Portfolio, Blogs, Career and more.</p>
      </div>


    </div>
  );
};

export default Home;