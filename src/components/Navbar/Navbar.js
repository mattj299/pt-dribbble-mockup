import React, { useState } from "react";
import "./styles.scss";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((currentNav) => !currentNav);
  };

  const changingActive = (e) => {
    if (window.innerWidth >= 950) {
      const currentActive = document.getElementsByClassName("active")[0];
      const newActive = e.target;

      currentActive.classList.remove("active");
      newActive.classList.add("active");
    } else {
      const currentActive = document.getElementsByClassName("mobile-active")[0];
      const newActive = e.target;

      currentActive.classList.remove("mobile-active");
      newActive.classList.add("mobile-active");
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="left-navbar navbar-section navbar-title navbar-list-item">
          <h3 className="navbar-logo">
            LEAN<span className="navbar-logo-registered-symbol">®</span>
          </h3>
        </div>

        <div className="middle-navbar navbar-section">
          <ul className="middle-navbar-ul">
            <li
              className="middle-li navbar-list-item active"
              onClick={changingActive}
            >
              HOME
            </li>
            <li className="middle-li navbar-list-item" onClick={changingActive}>
              SERVICES
            </li>
            <li className="middle-li navbar-list-item" onClick={changingActive}>
              TRAINER
            </li>
            <li className="middle-li navbar-list-item" onClick={changingActive}>
              CONTACT
            </li>
          </ul>
        </div>

        <div className="right-navbar navbar-section">
          <ul className="right-navbar-ul">
            <li className="right-li navbar-list-item">SIGN IN</li>
            <li className="right-li navbar-list-item navbar-cta">SIGN UP</li>
          </ul>
        </div>
      </div>

      {/* displays when navbar is mobile */}
      <div className="mobile-navbar">
        <div className="mobile-logo-container">
          <h3 className="navbar-logo mobile-logo">
            LEAN<span className="navbar-logo-registered-symbol">®</span>
          </h3>
        </div>

        <div onClick={toggleNav} className="mobile-bars">
          <FaBars />
        </div>

        {openNav && (
          <div className="mobile-navbar-list">
            <ul className="mobile-navbar-ul">
              <li
                className="mobile-li mobile-navabar-li mobile-active"
                onClick={changingActive}
              >
                HOME
              </li>
              <li
                className="mobile-li mobile-navabar-li"
                onClick={changingActive}
              >
                SERVICES
              </li>
              <li
                className="mobile-li mobile-navabar-li"
                onClick={changingActive}
              >
                TRAINER
              </li>
              <li
                className="mobile-li mobile-navabar-li"
                onClick={changingActive}
              >
                CONTACT
              </li>
              <li className="mobile-navabar-li">SIGN IN</li>
              <li className="mobile-navabar-li navbar-cta mobile-navbar-cta">
                SIGN UP
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
