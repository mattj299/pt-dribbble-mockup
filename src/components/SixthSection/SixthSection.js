import React from "react";
import "./styles.scss";

function SixthSection() {
  return (
    <div className="sixth-section">
      <div className="sixth-section-text-container">
        <h1 className="sixth-section-header main-header">
          "hier komt een testimonial <br></br>
          te staan waar een benefit <br></br>
          in naar voor komt."
        </h1>

        <div className="sixth-section-creator-banner-container">
          <div className="sixth-section-creator-banner">
            {/*  */}
            <div className="sixth-creator-img"></div>
            {/*  */}
            <div className="sixth-creator-middle-section">
              <h4 className="sixth-creator-header">Example name</h4>
              <p className="sixth-creator-description">Founder of company</p>
            </div>
            {/*  */}
            <div className="sixth-creator-right-section">
              <h4 className="sixth-creator-header">Traning since</h4>
              <p className="sixth-creator-description">February 2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
