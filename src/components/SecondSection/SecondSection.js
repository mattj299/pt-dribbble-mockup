import React from "react";
import "./styles.scss";

function SecondSection() {
  return (
    <div className="container">
      <div className="second-section">
        <div className="second-left-section">
          <div className="second-title-text-container">
            <h1 className="second-title-text main-header">
              Wij helpen jou je doelen<br></br>bereiken op jouw tempo<br></br>
              en jouw schema.
            </h1>
          </div>
          <div className="second-side-text-container">
            <p className="text-subheader">
              Lorem ipsum dolor sit amet, sed <br></br> do eiusmod tempor
              incididunt Ut <br></br>minim veniam, quis nostrud nisi ut
              <br></br>
              aliquip ex ea commodo consequat.
            </p>

            <p className="second-side-description text-description">
              Lorem ipsum dolor sit amet, sed doeiusmod sdv<br></br>
              Lorem ipsum dolor sit amet, sed doeiusmod <br></br>
              Lorem ipsum dolor sit amet, sed doeiusmod dvwvew<br></br>
              Lorem ipsum dolor sit amet, sed doeiusmod <br></br>
              Lorem ipsum dolor <br></br>
            </p>

            <button className="second-left-btn button">
              kom gratis kennismaken
            </button>
          </div>
        </div>
        <div className="second-right-section">
          <div className="second-img-container"></div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
