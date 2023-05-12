import React from "react";
import "./Hero.css";
import Img from "../assets/header-section.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={Img} className="into-img" />
      </div>
      <div className="content">
        <p>Hi, I am İhlas Mert</p>
        <p className="bold">Junior React Frontend Developer</p>
        <div className="buttons">
            <Link to="/project" className="btnen">Project</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
