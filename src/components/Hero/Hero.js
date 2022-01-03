import React from "react";
import "./styles.scss";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <div className="hero-title-extra-container">
          <p className="hero-title-extra text-description">
            Little example text
          </p>
        </div>
        <div className="hero-title">
          <h1 className="hero-main-header">PERSONAL TRAINING</h1>
        </div>
      </div>

      <div className="hero-img-container">
        <div className="hero-img"></div>
      </div>
    </div>
  );
}

export default Hero;
