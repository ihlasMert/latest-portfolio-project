import React from "react";
import Navbar from "../coponents/Navbar";
import Footer from "../coponents/Footer";
import HeroImg2 from "../coponents/HeroImg2";
import PricingCard from "../coponents/PricingCard";
import WorkCard from "../coponents/WorkCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <PricingCard />
      <WorkCard />
    </div>
  );
};

export default Project;
