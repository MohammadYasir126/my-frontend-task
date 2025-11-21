import React from "react";
import logo from "../assets/logo.png";
import arrowIcon from "../assets/harrow.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar custom-navbar navbar-expand-lg">
      <div className="container nav-container">
        <a
          className="navbar-brand d-flex align-items-center nav-logo-box"
          href="#"
        >
          <img src={logo} alt="logo" className="nav-logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center nav-menu">
            <li className="nav-item">
              <a className="nav-link">
                Software Team <span className="down-icon">⌄</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Technologies</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Resources</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Company</a>
            </li>

            <li className="nav-item">
              <button className="get-touch-btn">
                Get In Touch
                <img src={arrowIcon} alt="arrow" className="arrow-img" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
