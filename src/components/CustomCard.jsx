import React from "react";
import github from "../assets/github.png";
import navigate from "../assets/navigate.png"
const CustomCard = ({ githubUrl, ProjectName, Description, Technologies, liveUrl }) => {
  
  return (
    <div className="font-vt323 h-100 md:w-80  rounded-lg inset-shadow-2xs shadow-sm relative z-50 bg-[#30364F] grow max-w-96 rotate-4">
      <div className="group min-h-full bg-[#ECECEC] min-w-full rounded-lg -rotate-4 shad -z-10 inset-shadow-2xs shadow-sm p-4 hover:rotate-0 hover:scale-110 duration-300 cursor-pointer">
        <div className="group-rotate-4 ">
          <div className="flex justify-end gap-3">
            {liveUrl && (
              <a href={liveUrl} target="_blank">
                <img
                  src={navigate}
                  alt="navigate"
                  className="h-10 w-10 ml-auto hover:scale-110"
                />
              </a>
            )}
            <a href={githubUrl} target="_blank">
              <img
                src={github}
                alt="github"
                className="h-10 w-10 ml-auto hover:scale-110"
              />
            </a>
          </div>
          <p className="text-2xl font-bold mt-10 ">{ProjectName}</p>
          <p className="mt-6 text-sm mb-4 text-secondary font-bold">
            {Description}
          </p>

          <div className="flex flex-wrap gap-2">
            {Technologies?.map((item) => (
              <div className="bg-[#30364F] text-white text-center  p-1 max-w-1/2 rounded-full grow">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
