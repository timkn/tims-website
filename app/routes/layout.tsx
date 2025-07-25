"use client";

import { Outlet, useLocation } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState, useRef } from "react";
import { useTheme, getSystemTheme } from "../lib/utils";

type Star = {
  top: string;
  left: string;
  width: string;
  height: string;
  twinklingDelay: string;
  floatingDelay: string;
};

export default function Layout() {
  const numStars = 70;
  const [stars, setStars] = useState<Star[]>([]);
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  const { theme } = useTheme();

  const isDark =
    theme === "dark" || (theme === "system" && getSystemTheme() === "dark");

  function createStars() {
    const newStars: Star[] = [];
    // Get actual document height, with minimum of 100vh
    const documentHeight = Math.max(
      document.body.scrollHeight,
      window.innerHeight
    );

    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 3;
      const star: Star = {
        top: Math.random() * documentHeight + "px",
        left: Math.random() * 100 + "vw",
        width: size + "px",
        height: size + "px",
        twinklingDelay: Math.random() * 6 + "s", // Random delay up to 6s
        floatingDelay: Math.random() * 20 + "s", // Random delay up to 20s
      };
      newStars.push(star);
    }
    setStars(newStars);
  }

  useEffect(() => {
    // Clear existing stars first
    setStars([]);

    // Wait for the main content to actually change
    if (!mainRef.current) return;

    const observer = new MutationObserver(() => {
      // Debounce to avoid multiple rapid calls
      setTimeout(() => {
        createStars();
      }, 100);
    });

    // Watch for changes in the main content (where Outlet renders)
    observer.observe(mainRef.current, {
      childList: true,
      subtree: true,
    });

    // Also create stars immediately for initial load
    setTimeout(() => {
      createStars();
    }, 50);

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="night-sky dark:night-sky-dark z-0"></div>
      <Navbar />
      <main ref={mainRef} className="flex-grow z-20">
        <Outlet />
      </main>
      <Footer />

      {stars.map((star, index) => (
        <div
          key={index}
          className={isDark ? "star-dark" : "star"}
          style={{
            top: star.top,
            left: star.left,
            width: star.width,
            height: star.height,
            animationDelay: `${star.twinklingDelay}, ${star.floatingDelay}`,
          }}
        />
      ))}
    </div>
  );
}
