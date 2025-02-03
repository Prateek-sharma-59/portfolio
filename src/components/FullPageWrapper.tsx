"use client";

import { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";

const FullPageWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new (fullpage as any)("#fullpage", {
        navigation: true, // Enables navigation dots
        scrollingSpeed: 1000,
        sectionsColor: ["#1abc9c", "#3498db", "#9b59b6"], // Background colors
        anchors: ["landing", "about", "experience"], // Anchor links
        autoScrolling: true, // ✅ Ensures scrolling works
        fitToSection: true, // ✅ Scrolls to full sections
        scrollBar: false, // ✅ Removes default browser scroll
        scrollOverflow: true, // ✅ Enables scrolling inside sections if content overflows
      });
    }

    return () => {
      if (typeof window !== "undefined") {
        (fullpage as any).destroy("all");
      }
    };
  }, []);

  return <div id="fullpage">{children}</div>;
};

export default FullPageWrapper;
