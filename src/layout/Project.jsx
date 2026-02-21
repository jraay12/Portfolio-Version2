import React from "react";
import CustomCard from "../components/CustomCard";
import { recentProjects } from "../../projects";
import AOS from "aos";
import "aos/dist/aos.css";
const Project = () => {
  AOS.init({
    duration: 2000,
    once: true
  });
  return (
    <div
      id="projects"
      className="lg:max-w-[1536px] mx-auto mt-10 w-full font-vt323 p-10 brightness-90"
    >
      <p className="text-5xl font-bold text-shadow-lg text-black text-center lg:text-start" data-aos="fade-up">
        Projects
      </p>
      <p className="text-secondary mt-2 mb-10 text-center lg:text-start" data-aos="fade-up">
        _What I've made?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-10">
        {recentProjects.map((item) => (
          <CustomCard
            githubUrl={item.githubUrl}
            ProjectName={item.project_name}
            Description={item.Description}
            Technologies={item.techstack}
            liveUrl={item.liveUrl}
            Freelance={item.freelance}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
