import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="lg:max-w-[1536px] mx-auto mt-8 w-full font-vt323 p-10 relative mt-20 mb-10"
    >
      <div className="min-h-98  max-w-120 mx-auto inset-shadow-sm shadow-sm rounded-2xl p-10  flex flex-col">
        <h1 className="font-bold text-center text-shadow-lg">
          Let's work together
        </h1>
        <label htmlFor="" className="mt-10 mb-2">
          Your Email
        </label>
        <input
          type="text"
          placeholder="e.x juandelacruz@gmail.com"
          className="outline-none border rounded-sm h-10 bg-secondary/30 px-4"
        />

        <label htmlFor="" className="mt-10 mb-2">
          Message
        </label>
        <textarea
          name=""
          id=""
          placeholder="Message..."
          rows={5}
          className="border rounded-sm bg-secondary/30 p-4"
        ></textarea>
        <div className="mt-10" />
        <button className="bg-tertiary w-1/2 py-2 text-white rounded-sm">
          Message me
        </button>
      </div>
      <p className="font-bold mt-10 text-center text-sm lg:text-start">Created by John Ray Canete</p>
    </div>
  );
};

export default Contact;
