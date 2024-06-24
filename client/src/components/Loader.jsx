import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    rotate: [0, 360],
    transition: {
      rotate: {
        yoyo: Infinity,
        duration: 1,
        ease: "linear",
      },
    },
  },
};

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <motion.div
        variants={loaderVariants}
        animate="animationOne"
        className="flex justify-center items-center"
      >
        <img className="w-24 h-24" src="/logo.png" alt="logo" />
      </motion.div>
    </div>
  );
};

export default Loader;
