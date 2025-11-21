import React from "react";
import "../styles/hero.css";
import whiteArrow from "../assets/arrow-white.png";
import greenArrow from "../assets/harrow.png";

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">

        <div className="hero-left">
          <h3 className="hero-subtitle">
            HIRE DEDICATED <span className="line"></span>
          </h3>

          <h1 className="hero-title">DEVELOPERS</h1>

          <p className="hero-tagline">
            Top 1% Pre-Vetted, In-House & Dedicated Software Programmers
          </p>

          <p className="hero-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <div className="hero-buttons">
            <button className="btn-view">
              View More <img src={whiteArrow} alt="arrow" className="arrow-icon" />
            </button>

            <button className="btn-touch">
              Get In Touch <img src={greenArrow} alt="arrow" className="arrow-icon" />
            </button>
          </div>
        </div>

        <div className="hero-card">
          <h3 className="card-title">Create Your Team</h3>
          <p className="card-sub">Lorem Ipsum Is Simply Dummy Text Of The Printing</p>

          <div className="card-grid">

            <label>
              Full Name
              <input type="text" placeholder="Enter You Name" />
            </label>

            <label>
              Email Address
              <input type="email" placeholder="Enter You Email" />
            </label>

            <label>
              Phone No
              <input type="text" placeholder="Enter You Number" />
            </label>

            <label>
              Country
              <input type="text" placeholder="Enter You Country" />
            </label>

            <label className="full">
              Project Brief
              <textarea placeholder="Enter Your Project Brief"></textarea>
            </label>

          </div>

          <button className="btn-submit">
            Hire Software Developer
            <img src={whiteArrow} alt="arrow" className="arrow-icon" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
