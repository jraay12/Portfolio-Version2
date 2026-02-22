import React from "react";
import github from "../assets/github.png";
import navigate from "../assets/navigate.png";
import AOS from "aos";
import "aos/dist/aos.css";
const CustomCard = ({
  githubUrl,
  ProjectName,
  Description,
  Technologies,
  liveUrl,
  Freelance,
}) => {
  AOS.init({
    duration: 2000,
    once: true,
  });
  return (
    <div className="relative w-full  font-robot bg-secondary/10 shadow-md rounded-lg p-2 hover:scale-110 transition duration-300 cursor-pointer" data-aos="fade-up" data-aos-delay="50">
      {/* icon container */}
      <div className="absolute left-0 w-full flex justify-end gap-2 items-center px-2">
        {githubUrl && (
          <a href={githubUrl} target="_blank">
            <img src={github} alt="" className="w-8 h-8" />
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank">
            <img src={navigate} alt="" className="w-7 h-7" />
          </a>
        )}
      </div>
      <p className="mt-16 text-2xl font-bold uppercase  font-robot">
        {ProjectName}{" "}
        <span className="text-xs text-black underline underline-offset-2">{`${Freelance ? "Freelance" : "Hobby"}`}</span>
      </p>
      <p className="text-sm mt-6 text-black/70 font-robot">{Description}</p>

      {/* tech start  */}
      <div className="flex flex-wrap gap-4 mt-10 justify-start mb-4">
        {Technologies.map((item) => (
          <div className="border px-2 py-1 rounded-lg bg-primary ">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default CustomCard;
