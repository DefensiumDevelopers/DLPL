import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fakeDataFetch();
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="absolute inset-0 flex justify-center items-center bg-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading && (
        <motion.div
          key="content"
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          s
        >
          <div className="min-h-screen flex flex-col">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </Router>
          <Footer />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default App;
