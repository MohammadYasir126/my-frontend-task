import React from "react";
import "../styles/whychoose.css";

import bgLeft from "../assets/img-1.png";
import bgDots from "../assets/img-2.png";
import illustrationTop from "../assets/img-3.png";
import illustrationBottom from "../assets/img-4.png";
import squiggle from "../assets/img-5.png";

const WhyChoose = () => {
  return (
    <section className="why-wrapper">

      <img src={bgLeft} className="wc-bg-left" alt="" />
      <img src={bgDots} className="wc-bg-dots" alt="" />

      <div className="wc-container">

        <div className="wc-header">
          <h2>Why Hire Developers From Our Name</h2>
          <p>
            Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.
            Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since
          </p>
        </div>

        <div className="wc-row">
          <div className="wc-img wc-img-top">
            <img src={illustrationTop} alt="" />
          </div>

          <div className="wc-text">
            <h3>High Quality/Cost Ratio</h3>

            <div className="wc-item">
              <span className="wc-bullet green"></span>
              <div>
                <h4>Hire Silicon Valley Caliber At Half The Cost</h4>
                <p>
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
                </p>
              </div>
            </div>

            <div className="wc-item">
              <span className="wc-bullet pink"></span>
              <div>
                <h4>100+ Skills Available</h4>
                <p>
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wc-row">

          <div className="wc-text">
            <h3>Rigorous Vetting</h3>

            <div className="wc-item">
              <span className="wc-bullet green"></span>
              <div>
                <h4>5+ Hours Of Tests And Interviews</h4>
                <p>
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
                </p>
              </div>
            </div>

            <div className="wc-item">
              <span className="wc-bullet pink"></span>
              <div>
                <h4>Seniority Tests</h4>
                <p>
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
                </p>
              </div>
            </div>
          </div>

          <div className="wc-img wc-img-bottom">
            <img src={illustrationBottom} alt="" />
          </div>

          <img src={squiggle} className="wc-bg-squig-bottom" alt="" />
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
