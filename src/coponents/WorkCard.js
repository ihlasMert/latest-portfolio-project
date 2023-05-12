import React from "react";
import "./WorkCard.css";
import { NavLink } from "react-router-dom";
import HeroImg2 from "../assets/heroImg-2.jpg";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"> </h1>
      <div className="project-container">
        <div className="project-card">
          <img src={HeroImg2} />
          <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p>This is text</p>

            <div className="pro-btns">
              <NavLink to="utl.com" className="btn">
                View
              </NavLink>
              <NavLink to="utl.com" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
