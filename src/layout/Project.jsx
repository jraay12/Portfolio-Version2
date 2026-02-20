import React from "react";
import CustomCard from "../components/CustomCard";
import { recentProjects } from "../../projects";
const Project = () => {
  return (
    <div
      id="projects"
      className="lg:max-w-[1536px] mx-auto mt-10 w-full font-vt323 p-10 brightness-90"
    >
      <p className="text-5xl font-bold text-shadow-lg text-secondary">Projects</p>
      <p className="text-secondary mt-2 mb-20">_What I've made?</p>
      <div className="flex gap-20 flex-wrap justify-evenly">
        {recentProjects.map((item) => (
          <CustomCard
            githubUrl={item.githubUrl}
            ProjectName={item.project_name}
            Description={item.Description}
            Technologies={item.techstack}
            liveUrl={item.liveUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
