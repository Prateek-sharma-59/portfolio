import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNestjs } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import { SiMui } from "react-icons/si";

const Experience = () => {
  return (
    <div className="md:min-h-screen bg-[#1a1f35] flex justify-center items-center">
      <div className=" bg-white rounded-lg px-8 py-16 w-3/4">
          <h1 className=" text-5xl font-bold font-serif text-[#445589] text-center">
            Skills
          </h1>
          <h1 className="text-2xl font-serif text-center text-[#445589] mt-4">
            The skills, tools and technologies I use:
          </h1>
          <div>
            <div className="flex gap-20 mt-14">
              <FaReact fontSize={60} className="text-blue-400" />
              <IoLogoJavascript fontSize={60} className="text-yellow-300" />
              <FaHtml5 fontSize={60} className="text-orange-400" />
              <SiCss3 fontSize={60} className="text-blue-500" />
              <RiNextjsFill fontSize={60} />
              <SiTypescript fontSize={60} className="text-blue-500" />
              <FaNode fontSize={60} className="text-green-700" />
              <SiMongodb fontSize={60} className="text-lime-600" />
            </div>
            <div className="flex gap-20 justify-center mt-14">
              <GrMysql fontSize={60} className="text-blue-500" />
              <FaAws fontSize={60} className="text-orange-400" />
              <FaGitAlt fontSize={60} className="text-orange-500" />
              <FaGithubSquare fontSize={60} />
              <RiTailwindCssFill fontSize={60} className="text-blue-500" />
              <FaBootstrap fontSize={60} className="text-purple-600" />
            </div>
            <div className="flex gap-20 justify-center mt-14">
              <SiMui fontSize={60} className="text-blue-500" />
              <IoLogoFirebase fontSize={60} className="text-orange-400" />
              <SiNestjs fontSize={60} className="text-red-700" />
              <SiStrapi fontSize={60} className="text-purple-600" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Experience;
