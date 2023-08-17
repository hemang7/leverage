import React, { useState } from "react";
import Slider from "./Gallery";
import hotstar from "../assets/hotstar.png";
import { FaLink } from "react-icons/fa";
import whatsapp from "../assets/whatsapp.png";
import google from "../assets/google.png";
import barclays from "../assets/barclays.png";
import ey from "../assets/ey.png";
import amazon from "../assets/amazon.png";
import accenture from "../assets/accenture.png";

function HeroSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoClick = (videoIndex) => {
    setActiveVideo(videoIndex === activeVideo ? null : videoIndex);
  };
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div
        className="lg:w-1/3 text-white flex flex-col justify-center"
        style={{ marginBottom: "90px" }}
      >
        <h1
          className=" flex mb-4 text-4xl lg:text-5xl text-bold lg:ml-8 mt-10"
          style={{ marginLeft: "100px" }}
        >
          FIRST IN THE
        </h1>
        <span
          className="text-4xl lg:text-5xl mb-9 flex text-bold lg:ml-8 "
          style={{ marginLeft: "100px" }}
        >
          FAMILY
        </span>
        <div className=" text-gray-400 text-xl" style={{ marginLeft: "100px" }}>
          <p className="flex">They are the global citizens of</p>
          <p className="flex">tomorrow. Start your study</p>
          <p className="flex">abroad journey today.</p>
          <p className="flex mt-5">
            <a href="your-link-here" className="ml-2 mr-2">
              <FaLink />
            </a>
            Live on
            <img
              src={hotstar}
              className="w-9 rounded mb-1 ml-3"
              alt="Hotstar"
            />
          </p>
        </div>
        <button className="bg-blue-500 text-white px-2 py-2 ml-5 mr-5 mt-4 rounded">
          Get your shortlist free
        </button>
        <button className="bg-white text-black px-2 ml-5 mr-5 py-2 mt-2 rounded">
          Talk to an expert
        </button>
        <p className="text-gray-500 text-s mt-3">
          95% of our students get an admit in less than 4 weeks
        </p>
        <div>
          <p className="text-gray-500 text-s mt-10">
            Our students finished university to work at global offices of:
          </p>
          <div className="flex flex-wrap mt-5 justify-center">
            <img src={google} className="w-20 mx-1 my-2" />
            <img src={barclays} className="w-20 h-16 mx-1 my-2" />
            <img src={ey} className="w-20 mx-1 my-2" />
            <img src={amazon} className="w-20 mx-1 my-2" />
            <img src={accenture} className="w-20 mx-1 my-2" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 bg-black p-8 relative">
        <Slider handleVideoClick={handleVideoClick} activeVideo={activeVideo} />
      </div>
      <img
        src={whatsapp}
        className="lg:absolute bottom-0 right-0 lg:mr-5 mb-5 w-8 h-8 lg:w-10 lg:h-10 cursor-pointer"
        alt="WhatsApp"
        style={{ position: "fixed" }}
      />
    </div>
  );
}

export default HeroSection;
