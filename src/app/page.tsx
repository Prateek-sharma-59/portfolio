"use client";

import About from "@/components/about";
import Experience from "@/components/experience";
import LandingComponent from "@/components/landingComponent";
import FullPageWrapper from "@/components/FullPageWrapper";

export default function Home() {
  return (
    <FullPageWrapper>
      <div className="section">
        <LandingComponent />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Experience />
      </div>
    </FullPageWrapper>
  );
}
