import React from "react";
import burger from "../assets/burger-bar.png";
import logo from "../assets/logo.png";
import { useEffect, useRef, useState } from "react";
const Header = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex h-16 shadow-sm items-center justify-between w-full font-vt323 px-10 bg-primary text-white fixed top-0 left-0 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"} z-90`}
    >
      <div className="flex items-center">
        <img src={logo} alt="my logo" className="w-40 h-40 -translate-x-10" />
      </div>
      {/* burger bar */}
      <img
        src={burger}
        alt="burger bar"
        className="w-6 h-6 cursor-pointer lg:hidden invert-100"
      />
      <div
        className="hidden lg:flex gap-10 text-black font-bold
                [&>p]:transition 
                [&>p]:duration-200 
                [&>p:hover]:scale-110"
      >
        <p>
          <a href="#">Home</a>
        </p>
        <p>
          <a href="#experience">Experience</a>
        </p>
        <p>
          <a href="#projects">Project</a>
        </p>
        <p>
          <a href="#about">About</a>
        </p>
        <p>
          <a href="#contact">Contact</a>
        </p>
      </div>
    </div>
  );
};

export default Header;
