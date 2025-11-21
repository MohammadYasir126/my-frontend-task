import React from "react";
import "../styles/footer.css";

import logo from "../assets/logofooter.png";
import fb from "../assets/s1.png";
import tw from "../assets/s2.png";
import li from "../assets/s3.png";
import dr from "../assets/s4.png";
import locationIcon from "../assets/location.svg";
import phoneIcon from "../assets/call.svg";
import emailIcon from "../assets/sms.svg";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-col">
          <img src={logo} alt="logo" className="footer-logo" />
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
          <div className="footer-social">
            <div className="social-circle">
              <img src={fb} alt="facebook" className="social-icon" />
            </div>
            <div className="social-circle">
              <img src={tw} alt="twitter" className="social-icon" />
            </div>
            <div className="social-circle">
              <img src={li} alt="linkedin" className="social-icon" />
            </div>
            <div className="social-circle">
              <img src={dr} alt="dribbble" className="social-icon" />
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li>Software Team</li>
            <li>Technologies</li>
            <li>Resources</li>
            <li>Company</li>
            <li>Contact us</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-list">
            <li>Dedicated Development</li>
            <li>Staff Augmentation Services</li>
            <li>Software Development</li>
            <li>Development Center</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="contact-list">
            <li className="contact-item">
              <img src={locationIcon} alt="location" className="contact-icon" />
              Envato, Level 13, 2 Elizabeth Victoria 3000 India
            </li>
            <li className="contact-item">
              <img src={phoneIcon} alt="phone" className="contact-icon" />
              +91 961 944 1176
            </li>
            <li className="contact-item">
              <img src={emailIcon} alt="email" className="contact-icon" />
              azyoga@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        logoname. 2023. All rights reserved
      </div>
    </footer>
  );
}
