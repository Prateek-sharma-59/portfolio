import React from "react";
import Image from "next/image";
import about from "../../public/about.png";

const About = () => {
  return (
    <div className="md:min-h-screen bg-[#1a1f35] flex justify-center items-center md:p-0 p-8">
      <div className=" bg-[#0d101c] rounded-lg px-4 py-4 md:px-16 md:py-8 md:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            className="mt-6"
            src={about}
            width={400}
            height={200}
            alt="about"
          />
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-white text-4xl md:text-5xl font-bold font-serif mt-2 md:mt-0">
                About
              </h1>

              <p className="text-white text-sm md:text-xl leading-relaxed md:text-justify mt-4">
                Results-driven Software Developer with a specialization in MERN
                stack applications, combining strong analytical skills with a
                meticulous attention to detail. Proven ability to facilitate
                collaboration and communication among team members, ensuring
                project milestones are met within timelines and budget
                constraints. Adept at designing and implementing innovative,
                user - centric app solutions by integrating the latest
                technologies and design principles. Committed to delivering
                high-quality, functional MERN applications that meet client
                needs and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
