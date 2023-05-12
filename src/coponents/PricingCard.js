import React from "react";
import "./PricingCard.css";
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>-Basics</h3>
          <span className="bar"></span>
          <p>-3 Days</p>
          <p>-3 Days</p>
          <p>-3 Days</p>
          <p>-3 Days</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="card">
          <h3>-Basics</h3>
          <span className="bar"></span>
          <p>-3 Days</p>
          <p>-3 Days</p>
          <p>-3 Days</p>
          <p>-3 Days</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="card">
          <h3>-Basics</h3>
          <span className="bar"></span>
          <p>-3 Days</p>
          <p>-3 Days</p>
          <p>-3 Days</p>
          <p>-3 Days</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
