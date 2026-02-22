import React from "react";
import myself from "../assets/myself.jpg";
import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
const Home = () => {
  return (
    <div className=" lg:max-w-[1536px] min-h-screen  mx-auto flex-1 min-w-screen  flex flex-col justify-center items-center  p-10 ">
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center ">
        <div className="relative  lg:translate-x-100 lg:animate-move-logo z-50">
          <img src={myself} alt="" className="w-30 h-30 md:w-60 md:h-60 rounded-full" />
          <div className="rounded-full bg-gray-600 z-20 h-3 w-3 md:h-6 md:w-6 right-2 md:right-11 bottom-3 absolute  md:bottom-2 ring-2 ring-white animate-online"></div>
        </div>
        <div className="flex flex-col  items-center lg:items-start lg:max-w-1/2 gap-4 animate-loading-screen ">
          <p className="uppercase text-center lg:text-start text-black text-sm md:text-lg">
            Hello, they call me John!
          </p>
          <p className="lg:text-3xl text-xl uppercase fonth-thin text-center lg:text-start  text-black">
            A full-stack developer{" "}
            <span className="text-tertiary lg:text-5xl font-bold">
              building the future
            </span>
            , one line of code at a time.
          </p>
          <div className="flex gap-6 mt-4">
            <a href="https://github.com/jraay12" target="_blank">
              <img
                src={github}
                alt=""
                className="h-10 w-10 hover:scale-110 hover:cursor-pointer duration-300"
              />
            </a>
            <a
              href="https://www.facebook.com/keepcalmandlovedota3"
              target="_blank"
            >
              <img
                src={facebook}
                alt=""
                className="h-10 w-10 hover:cursor-pointer duration-300 hover:scale-110"
              />
            </a>
            <a href="https://www.linkedin.com/in/jraay12/" target="_blank">
              <img
                src={linkedin}
                alt=""
                className="h-10 w-10 hover:cursor-pointer duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce cursor-pointer">
        <a href="#experience">
          <p className="text-forth font-bold">Scroll down</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
