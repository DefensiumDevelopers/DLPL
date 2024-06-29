import React from "react";
import DynamicText from "../components/DynamicText"
import Services from "./Services";


//Home Component
const Home = () => {


  // Memoize the ParticleApp to prevent re-renders


  return (
    <main className="flex flex-col justify-center items-center">
     
      <DynamicText />
      <Services />
      <div className="w-full h-screen bg-rose-500"></div>

    </main>
  );
};

export default Home;
