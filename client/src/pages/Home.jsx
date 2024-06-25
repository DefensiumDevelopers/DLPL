import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const headings = ["Hello", "Welcome to", "Defensium", "Labs"];

const FlipLink = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="absolute overflow-hidden whitespace-nowrap text-4xl uppercase sm:text-7xl md:text-8xl lg:text-9xl h-32 flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) =>
        prevIndex === headings.length - 1 ? 0 : prevIndex + 1
      );
    }, headings.length * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[calc(100vh-88px)] relative flex justify-center items-center gap-2 px-8 py-10 mt-[5.5rem]">
      <AnimatePresence initial={false}>
        {headings.map(
          (heading, index) =>
            index === currentHeadingIndex && (
              <FlipLink key={index}>{heading}</FlipLink>
            )
        )}
      </AnimatePresence>
    </section>
  );
};

export default Home;
