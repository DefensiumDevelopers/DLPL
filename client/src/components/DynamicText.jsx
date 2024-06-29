import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DynamicBackground from "./DynamicBackground";


const headings = ["Welcome to Defensium Labs", "Provide you security"];

const FlipLink = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-white text-3xl sm:text-5xl font-bold absolute text-center"
        >
            {children}
        </motion.div>
    );
};

const DynamicText = () => {
    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) =>
                prevIndex === headings.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Adjusted interval for better timing

        return () => clearInterval(interval);
    }, []);


    return (
        <motion.div className="w-full h-screen bg-black z-[-1]">
            <div className="w-full h-full flex justify-center items-center relative">
                <AnimatePresence initial={false}>
                    <FlipLink key={currentHeadingIndex}>
                        {headings[currentHeadingIndex]}
                    </FlipLink>
                    <DynamicBackground />
                </AnimatePresence>
                
            </div>
        </motion.div>
    );
};

export default DynamicText;
