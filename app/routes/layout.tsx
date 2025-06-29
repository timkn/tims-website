import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

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

  function createStars() {
    const newStars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 3;
      const star: Star = {
        top: Math.random() * 100 + "vh",
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
    createStars();
  }, []);

  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="night-sky dark:night-sky-dark z-0"></div>
      <Navbar />
      <main className="flex-grow z-20">
        <Outlet />
      </main>
      <Footer />

      {stars.map((star, index) => (
        <div
          key={index}
          className="star dark:star-dark"
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
