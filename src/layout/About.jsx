import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
const About = () => {
  return (
    <div
      id="about"
      className=" lg:max-w-[1536px] mx-auto mt-8 w-full font-vt323 p-10 relative"
    >
      <p className="text-5xl font-bold text-shadow-lg text-black text-center lg:text-start">
        About Me
      </p>
      <p className=" mt-2 text-secondary text-center lg:text-start">
        _The journey beyond the screen.
      </p>
      {/* parent of the about */}
      <div className="flex flex-col md:flex-row justify-center items-center  gap-10 mt-10">
        {/* about me details */}
        <div className=" inset-shadow-sm shadow-sm w-full min-h-98 rounded-xl p-10">
          <p className="text-justify text-2xl font-robot">
           
            Hello, this is me — someone who values growth, meaningful
            experiences, and building strong connections. I embrace challenges
            as opportunities to learn, adapt, and improve, and I strive to make
            a positive impact in everything I do. I’m committed to personal
            development, continuous learning, and bringing my best self to every
            situation.
          </p>
        </div>

        {/* images start */}
        <div className="grid grid-cols-2 w-full">
          <div
            className="h-48 rounded-2xl overflow-hidden 
             
             transition duration-200
             hover:rotate-3 hover:scale-110"
          >
            <img
              src={image1}
              alt="Experience"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className=" h-48 rounded-2xl overflow-hidden 
            
             transition duration-200
             hover:rotate-3 hover:scale-110"
          >
            <img
              src={image2}
              alt="Experience"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="h-48 rounded-2xl overflow-hidden 
            
             transition duration-200
             hover:rotate-3 hover:scale-110"
          >
            <img
              src={image3}
              alt="Experience"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className=" h-48 rounded-2xl overflow-hidden 
            
             transition duration-200
             hover:rotate-3 hover:scale-110"
          >
            <img
              src={image1}
              alt="Experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
