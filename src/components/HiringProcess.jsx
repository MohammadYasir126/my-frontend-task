import React from "react";
import "../styles/hiringprocess.css";

import bg from "../assets/blog-bg-1.png";
import step1 from "../assets/himg1.png";
import step2 from "../assets/himg2.png";
import step3 from "../assets/himg3.png";
import step4 from "../assets/himg4.png";
import arrow from "../assets/arrow.png";

export default function HiringProcess() {
  return (
    <section className="hire-section" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hire-inner">
        <h2 className="hire-title">Our Hiring Process</h2>
        <p className="hire-sub">
          Take A Look At Our Simple And Straightforward Process To Hire Software Developers From ValueCoders.
        </p>

        <div className="hire-steps">

          <div className="hire-step">
            <div className="circle-wrap">
              <img src={step1} className="step-icon" alt="" />
              <div className="step-badge">1</div>
            </div>
            <h4 className="step-title">INQUIRY</h4>
            <p className="step-desc">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
          </div>

          <img src={arrow} className="step-arrow arrow-1" alt="" />

          <div className="hire-step">
            <div className="circle-wrap">
              <img src={step2} className="step-icon" alt="" />
              <div className="step-badge">2</div>
            </div>
            <h4 className="step-title">SELECT DEVELOPERS</h4>
            <p className="step-desc">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
          </div>

          <img src={arrow} className="step-arrow arrow-2" alt="" />

          <div className="hire-step">
            <div className="circle-wrap">
              <img src={step3} className="step-icon" alt="" />
              <div className="step-badge">3</div>
            </div>
            <h4 className="step-title">TEAM INTEGRATION</h4>
            <p className="step-desc">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
          </div>

          <img src={arrow} className="step-arrow arrow-3" alt="" />

          <div className="hire-step">
            <div className="circle-wrap">
              <img src={step4} className="step-icon" alt="" />
              <div className="step-badge">4</div>
            </div>
            <h4 className="step-title">TEAM SCALING</h4>
            <p className="step-desc">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
