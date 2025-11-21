import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import arrowIcon from "../assets/harrow.png";
import downArrow from "../assets/down_arrow_icon.png";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <nav className="navbar custom-navbar">
      <div className="nav-container">
        <a className="nav-logo-box" href="#">
          <img src={logo} alt="logo" className="nav-logo" />
        </a>

        <button
          className={`navbar-toggler ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span className="t-icon"></span>
        </button>

        <div className={`nav-collapse ${open ? "show" : ""}`}>
          <ul className="nav-menu">
            <li className="dropdown-wrapper">
              <a
                className="nav-link software-team"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Software Team
                <img
                  src={downArrow}
                  className={`dropdown-arrow ${dropdownOpen ? "rotate" : ""}`}
                />
              </a>

              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item">Frontend Developers</li>
                  <li className="dropdown-item">Backend Developers</li>
                  <li className="dropdown-item">QA Engineers</li>
                  <li className="dropdown-item">UI/UX Designers</li>
                </ul>
              )}
            </li>

            <li><a className="nav-link">Services</a></li>
            <li><a className="nav-link">Technologies</a></li>
            <li><a className="nav-link">Resources</a></li>
            <li><a className="nav-link">Company</a></li>

            <li>
              <button className="get-touch-btn">
                Get In Touch
                <img src={arrowIcon} alt="arrow" className="arrow-img" />
              </button>
            </li>
          </ul>
        </div>

        {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
      </div>
    </nav>
  );
}
