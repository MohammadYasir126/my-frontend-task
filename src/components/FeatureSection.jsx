import React from "react";
import "../styles/feature.css";

import illustration from "../assets/Code-typing-bro.png";

export default function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-inner">
        <div className="feature-left">
          <div className="feature-art-wrap">
            <img
              src={illustration}
              alt="developer typing"
              className="feature-art"
            />
          </div>
        </div>

        <div className="feature-right">
          <h2 className="feature-title">
            Top Companies Trust ValueCoders For Hiring Software Developers
          </h2>

          <p className="feature-desc">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text
            Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
            And Scrambled It To Make A Type Specimen Book.
          </p>

          <ul className="feature-list">
            <li>
              <span className="check">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="11" fill="#E6FBF0" />
                  <path
                    d="M7.5 12.5L10.2 15.2L16.5 8.9"
                    stroke="#18B16A"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="feature-label">Client-Centric Approach</span>
            </li>

            <li>
              <span className="check">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="11" fill="#E6FBF0" />
                  <path
                    d="M7.5 12.5L10.2 15.2L16.5 8.9"
                    stroke="#18B16A"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="feature-label">Global Quality Standards</span>
            </li>

            <li>
              <span className="check">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="11" fill="#E6FBF0" />
                  <path
                    d="M7.5 12.5L10.2 15.2L16.5 8.9"
                    stroke="#18B16A"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="feature-label">Cutting-Edge Infrastructure</span>
            </li>

            <li>
              <span className="check">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="11" fill="#E6FBF0" />
                  <path
                    d="M7.5 12.5L10.2 15.2L16.5 8.9"
                    stroke="#18B16A"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="feature-label">
                Best-in-Class Project Management
              </span>
            </li>

            <li>
              <span className="check">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="11" fill="#E6FBF0" />
                  <path
                    d="M7.5 12.5L10.2 15.2L16.5 8.9"
                    stroke="#18B16A"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="feature-label">Time-Zone Compatibility</span>
            </li>

            <li>
              <span className="check">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="11" fill="#E6FBF0" />
                  <path
                    d="M7.5 12.5L10.2 15.2L16.5 8.9"
                    stroke="#18B16A"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="feature-label">Agile Adaptability</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
