import React from "react";
import "./styles.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-left-section">
            <h3 className="footer-left-logo">
              LEAN<span className="footer-left-logo-registered-symbol">®</span>
            </h3>
          </div>

          <div className="footer-right-section">
            <div className="footer-right-list-container">
              <h3 className="footer-right-list-header">Sitemap</h3>
              <ul className="footer-right-list">
                <li className="footer-right-list-item">Home</li>
                <li className="footer-right-list-item">Aanod</li>
                <li className="footer-right-list-item">Over ons</li>
                <li className="footer-right-list-item">Contact</li>
                <li className="footer-right-list-item">Agenda</li>
              </ul>
            </div>

            <div className="footer-right-list-container">
              <h3 className="footer-right-list-header">Aanod</h3>
              <ul className="footer-right-list">
                <li className="footer-right-list-item">Home</li>
                <li className="footer-right-list-item">Aanod</li>
                <li className="footer-right-list-item">Over ons</li>
                <li className="footer-right-list-item">Contact</li>
                <li className="footer-right-list-item">Agenda</li>
              </ul>
            </div>

            <div className="footer-right-list-container">
              <h3 className="footer-right-list-header">Contact</h3>
              <ul className="footer-right-list">
                <li className="footer-right-list-item">Home</li>
                <li className="footer-right-list-item">Aanod</li>
                <li className="footer-right-list-item">Over ons</li>
                <li className="footer-right-list-item">Contact</li>
                <li className="footer-right-list-item">Agenda</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="copyright-left">
            <h3 className="copyright-left-text">Copyright © lean 2021</h3>
          </div>
          <div className="copyright-right">
            <p className="copyright-right-text">Example of Website</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
