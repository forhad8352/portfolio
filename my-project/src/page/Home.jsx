import React, { useEffect, useState } from "react";
import Menu from "../component/Menu";
import About from "../component/About";
import Skills from "../component/Skills";
import Myproject from "../component/Myproject";
import Contact from "../component/Contact";
import Fotter from "../component/Fotter";
import ScrolltoTop from "../component/ScrolltoTop";
import "./Home.css";
import Banner from "../component/Banner";

const Home = () => {
  const [bubbles, setBubbles] = useState([]);

  const createBubble = () => {
    return {
      size: Math.random() * 50 + 10,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 10,
    };
  };
  useEffect(() => {
    const initialBubbles = Array.from({ length: 60 }, () => createBubble());
    setBubbles(initialBubbles);
  }, []);

  return (
    <>
      <div className="relative w-full h-full overflow-hidden z-0 bg-gray-900">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gray-500 opacity-50 animate-bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          ></div>
        ))}
        <Menu />
        <Banner />
        <About />
        <Skills />
        <Myproject />
        <Contact />
        <Fotter />
        <ScrolltoTop />
      </div>
    </>
  );
};

export default Home;
