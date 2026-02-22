import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = () => {
  AOS.init({
    duration: 2000,
    once: true,
  });
  return (
    <div
      id="experience"
      className="lg:max-w-[1536px] mx-auto mt-20  font-vt323 p-10"
    >
      <p className="text-5xl font-bold text-shadow-lg text-black  text-center lg:text-start">
        Experience
      </p>
      <p className=" mt-2 text-secondary text-center lg:text-start">
        _What experience do I bring?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-10 mt-10 mb-10  font-robot">
        <div
          class="rounded-2xl p-4 shadow-md bg-white/60 "
          data-aos="fade-right"
        >
          <p className="font-bold text-2xl">Cerebrox IT Solutions</p>
          <p className="text-sm font-thin">Fullstack Developer</p>
          <p className="mt-6">
            Enhance existing school systems by developing and implementing new
            features, addressing hotfixes, and fulfilling client requests. The
            projects are built using CodeIgniter.
          </p>
        </div>
        <div
          class=" rounded-2xl p-4 shadow-md bg-white/60 "
          data-aos="fade-left"
        >
          <p className="font-bold text-2xl">Freelance</p>
          <p className="text-sm font-thin">Backend Developer</p>
          <p className="mt-6">
            Design and develop systems tailored to client needs and
            requirements, delivering responsive and fully functional web or
            mobile applications, while collaborating with clients regularly to
            ensure alignment and stay on the same page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
