import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
const About = () => {
  return (
    <div
      id="about"
      className=" lg:max-w-[1536px] mx-auto mt-8 w-full font-vt323 p-10 relative"
    >
      <p className="text-5xl font-bold text-shadow-lg text-black">About Me</p>
      {/* parent of the about */}
      <div className="flex flex-col md:flex-row justify-center items-center border gap-10 mt-10">
        {/* about me details */}
        <div className=" border w-full min-h-98 rounded-xl"></div>

        {/* images start */}
        <div className="flex w-full flex-wrap gap-2">
          <div
            className="bg-red-700 w-[calc(50%-5rem)] min-h-40 rounded-2xl 
                  transition duration-200 
                  hover:rotate-3 hover:scale-110 
                  active:rotate-3 active:scale-110 focus:rotate-3"
          ></div>

          <div
            className="bg-blue-900 w-[calc(50%-5rem)] min-h-40 rounded-2xl 
                  transition duration-200 
                  hover:-rotate-3 hover:scale-110 
                  active:-rotate-3 active:scale-110"
          ></div>

          <div
            className="bg-green-700 w-[calc(50%-5rem)] min-h-40 rounded-2xl 
                  transition duration-200 
                  hover:rotate-3 hover:scale-110 
                  active:rotate-3 active:scale-110"
                  
          ></div>

          <div
            className="bg-yellow-900 w-[calc(50%-5rem)] min-h-40 rounded-2xl 
                  transition duration-200 
                  hover:-rotate-3 hover:scale-110 
                  active:-rotate-3 active:scale-110"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
