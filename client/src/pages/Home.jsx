import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesComponent from "../components/Particles";

const headings = ["Welcome to Defensium Labs", "Provide you securitity"];

// card css
const cardStyle =
  "w-[17rem] h-[23rem] bg-white rounded-xl shadow-2xl flex items-center justify-center";

// FlipLink
const FlipLink = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="absolute overflow-hidden text-4xl sm:text-8xl font-semibold text-white uppercase h-32 flex flex-1 items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

//Home Component
const Home = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) =>
        prevIndex === headings.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjusted interval for better timing

    return () => clearInterval(interval);
  }, []);

  // Memoize the ParticlesComponent to prevent re-renders
  const MemoizedParticlesComponent = useMemo(() => {
    return <ParticlesComponent id="particles" />;
  }, []);

  return (
    <>
      <div className="relative w-full h-[calc(100vh-88px)]">
        <div className="absolute inset-0 z-0">{MemoizedParticlesComponent}</div>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
          <AnimatePresence initial={false}>
            {headings.map(
              (heading, index) =>
                index === currentHeadingIndex && (
                  <FlipLink key={index}>{heading}</FlipLink>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="bg-slate-100 w-full h-screen z-10 flex flex-col items-center">
        <h1 className="text-8xl mt-[4rem] font-bold">Services</h1>
        <div className="w-full h-min-screen px-[300px] mt-[5rem] flex flex-wrap justify-center gap-[5rem]">
          <div className={cardStyle}> card 1</div>
          <div className={cardStyle}> card 1</div>
          <div className={cardStyle}> card 1</div>
        </div>
      </div>
    </>
  );
};

export default Home;
