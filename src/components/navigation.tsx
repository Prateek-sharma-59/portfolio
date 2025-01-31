"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";


const Navigation = ({ setOpen }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 z-50">
      <div
        className={`bg-white w-64 h-full p-4 fixed top-0 right-0 transition-transform transform ${
          isVisible ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out shadow-lg`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black text-2xl"
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => setOpen(false), 300); // Delay closing to allow the slide-out animation
          }}
        >
          &times;
        </button>

        {/* Navigation Links */}
        <ul className="flex flex-col items-start space-y-6 mt-10">
          <li
            // className="text-lg font-semibold text-blue-800 hover:underline cursor-pointer"
            // onClick={() => {
            //   setIsVisible(false);
            //   setTimeout(() => setOpen(false), 300);
            //   navigateToAboutUs();
            // }}
          >
            {/* <a href="/about-us">About us</a> */}
           
          </li>
          <li
            // className="text-lg font-semibold text-blue-800 hover:underline cursor-pointer"
            // onClick={() => {
            //   setIsVisible(false);
            //   setTimeout(() => setOpen(false), 300);
            // }}
          >
            {/* <a href="/services">Services</a> */}
            {/* <Link
                // onClick={navigateToAboutUs}
                className="text-lg font-semibold text-blue-800 hover:underline cursor-pointer"
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => setOpen(false), 300);
                  navigateToServices();
                }}
                to="OurServices"
                smooth={true}
                duration={500}
              >
                Services
              </Link> */}
          </li>
          <li>
            {/* Knowledge Centre with Dropdown */}
            
           
          </li>
         
          

        
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
