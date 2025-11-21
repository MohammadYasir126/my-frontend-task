import React from "react";
import "../styles/UserGuide.css";

import devImg from "../assets/devimg.png";

export default function UserGuideHiring() {
  return (
    <section className="user-guide-wrapper">
      <h2 className="guide-title">
        User Guide To Hire Dedicated Software Developers
      </h2>

      <div className="guide-container">
        <div className="sidebar">
          <div className="sidebar-item">Benefits Of Hiring Developers</div>
          <div className="sidebar-item active">
            Key Factors To Consider While Hiring
          </div>
          <div className="sidebar-item">Defining Your Project Requirements</div>
          <div className="sidebar-item">
            Choosing The Right Development Model
          </div>
          <div className="sidebar-item">
            Typical Challenges For Hiring Developers
          </div>
          <div className="sidebar-item">
            Hiring Freelancers Vs Dedicated Developers
          </div>
          <div className="sidebar-item">
            Communication With Remote Developers
          </div>
        </div>

        <div className="content">
          <h3 className="content-title">Benefits Of Hiring Developers</h3>

          <p className="content-desc">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text
            Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
            And Scrambled It To Make A Type Specimen Book.
          </p>

          <div className="feature-grid">
            <div className="feature-item">
              <span className="check">✔</span> Client-Centric Approach
            </div>
            <div className="feature-item">
              <span className="check">✔</span> Best-In-Class Project Management
            </div>
            <div className="feature-item">
              <span className="check">✔</span> Global Quality Standards
            </div>
            <div className="feature-item">
              <span className="check">✔</span> Time-Zone Compatibility
            </div>
            <div className="feature-item">
              <span className="check">✔</span> Cutting-Edge Infrastructure
            </div>
            <div className="feature-item">
              <span className="check">✔</span> Agile Adaptability
            </div>
          </div>

          <img src={devImg} className="bottom-img" alt="developer working" />
        </div>
      </div>
    </section>
  );
}
