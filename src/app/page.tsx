import About from "@/components/about";
import Experience from "@/components/experience";
import LandingComponent from "@/components/landingComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <LandingComponent />
      <About />
      <Experience/>
      
    </>
  );
}
