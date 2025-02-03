"use client";
import React from "react";
import Lottie from "react-lottie";
import Drawer from "./navigation";
import { Link } from "react-scroll";
import devAnimationData from "../../public/animation/devAnimation.json";


const LandingComponent = () => {

  const devAnimation = {
    loop: true,
    autoplay: true,
    animationData: devAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="md:min-h-screen bg-[#1a1f35]">
      <div className="grid grid-cols-2 px-8 py-4">
        <h1 className="text-white text-2xl font-bold">Portfolio</h1>
        <div className="text-white lg:flex hidden justify-around items-center font-bold">
          <Link className="cursor-pointer" to="About" smooth={true} duration={500}>
            About
          </Link>
          <Link className="cursor-pointer" to="Skills" smooth={true} duration={500}>
          Skills
          </Link>
          <h1>Projects</h1>
          <h1>Contact</h1>
        </div>
        <div className="h-full flex justify-end items-center lg:hidden">
          {/* <div className="w-8 h-8 rounded-full border text-white flex items-center justify-center"> */}
          {/* <CiMenuBurger fontSize={18} onClick={() => setOpen(true)} /> */}
          <Drawer />
          {/* </div> */}
        </div>
        {/* {open && <Navigation setOpen={setOpen} />} */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-4">
        <div className="text-white flex justify-center items-center">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold font-serif overflow-hidden whitespace-nowrap border-r-4 border-white animate-typing after:content-['|'] after:animate-blink">
            Hi, I&apos;m Prateek
            </h1>{" "}
            <p className="text-base md:text-xl mt-4 font-serif text-balance">
              A passionate software developer with 5 years of experience in MERN
              stack development. I specialize in building scalable web
              applications, creating seamless user experiences, and solving
              complex problems with clean and efficient code. Explore my work to
              see how I bring ideas to life!
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 rounded-lg text-white px-4 py-2 mt-8 font-semibold">
              Contact Me
            </button>
          </div>
        </div>
        <div>
          <Lottie
            options={devAnimation}
            height={"auto"}
            width={"auto"}
            // loader={imageLoader}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;
