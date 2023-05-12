import React from "react";
import Navbar from "../coponents/Navbar";
import HeroImg2 from "../coponents/HeroImg2";
import PricingCard from "../coponents/PricingCard";


const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <PricingCard />
 
    </div>
  );
};

export default Project;
