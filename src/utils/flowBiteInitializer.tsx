/* eslint-disable @typescript-eslint/no-require-imports */
"use client"
import { useEffect } from "react";
import "flowbite";


const FlowbiteInitializer = () => {
  useEffect(() => {
    require("flowbite");
  }, []);

  return null; 
};

export default FlowbiteInitializer;
