import React from "react";
import me from "../assets/me.png";
import AOS from "aos";
import "aos/dist/aos.css";
import star from "../assets/star.png";
import unstar from "../assets/unstar.png";
const Main = () => {
  AOS.init();
  return (
    <div className="relative flex flex-col items-center justify-center pt-10 pb-40">
      <div className="mt-10 rounded-full py-2 px-5 border animate-move-in font-vt323">
        Hello!
      </div>
      <p className="text-center text-6xl mt-4 font-vt323 uppercase">
        <span className="animate-move-in ">I'm</span>{" "}
        <span className="text-[#FF5F00] animate-move-in">John,</span>{" "}
        <span className="block font-bold animate-pop-text text-2xl ">
          Software Engineer
        </span>
      </p>
      <div
        className="bg-[#FF5F00]  rounded-full h-96 w-96 translate-y-24 align-bottom  animate-move-in "
        data-aos="fade-up"
      >
        <img src={me} alt="me" className="-translate-y-24" />
      </div>
      <p className="hidden lg:block lg:absolute font-vt323 max-w-1/4  left-14 bottom-1/4  animate-move-in" data-aos="fade-right">
        Full-stack developer crafting clean, responsive, and impactful web
        experiences — writing the future one line of code at a time. Always
        learning, always building.
      </p>
      <div className="hidden md:flex flex-col absolute font-vt323 right-14 bottom-2/6  animate-move-in" data-aos="fade-left">
        <div className="flex gap-1">
          <img src={star} alt="" className="w-4 h-4" />
          <img src={star} alt="" className="w-4 h-4" />
          <img src={unstar} alt="" className="w-4 h-4" />
          <img src={unstar} alt="" className="w-4 h-4" />
          <img src={unstar} alt="" className="w-4 h-4" />
        </div>
        <p className="text-2xl font-bold text-right">2 YEARS <span className="block text-sm">experience</span></p>
      </div>
    </div>
  );
};

export default Main;
