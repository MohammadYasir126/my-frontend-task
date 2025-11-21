import React from "react";
import "../styles/whyhire.css";
import bgimg from "../assets/bgimg.png";
import arrow from "../assets/arrow-white.png";

export default function WhyHireSection() {
  return (
    <section className="whyhire">
      <div className="whyhire-wrap">
        <div className="whyhire-left">
          <h2 className="whyhire-title on-image">
            Why Hire Software Developers <br /> In India?
          </h2>
          <img src={bgimg} alt="office" className="whyhire-img" />
        </div>

        <div className="whyhire-right">
          <ul className="whyhire-list">
            <li>
              <span>English Speaking Programmers</span>
              <img src={arrow} alt="" />
            </li>
            <li>
              <span>Flexible Work Hours</span>
              <img src={arrow} alt="" />
            </li>
            <li>
              <span>Rapid Onboarding Process</span>
              <img src={arrow} alt="" />
            </li>
            <li>
              <span>Expertise In Top Technologies</span>
              <img src={arrow} alt="" />
            </li>
            <li>
              <span>Reliable Partner Credentials</span>
              <img src={arrow} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
