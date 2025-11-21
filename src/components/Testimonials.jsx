import React from "react";
import "../styles/testimonials.css";

import img1 from "../assets/cimg1.png";
import img2 from "../assets/cimg2.png";
import img3 from "../assets/cimg3.png";
import img4 from "../assets/cimg4.png";
import img5 from "../assets/cimg5.png";
import playBtn from "../assets/cimg5.png";

export default function Testimonials() {
  const data = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
  ];

  return (
    <section className="testimonials-wrapper">
      <h2 className="title">What Our Clients Have To Say About Us</h2>
      <p className="subtitle">
        Take A Look At Our Simple And Straightforward Process To Hire Software
      </p>

      <div className="cards-container">
        {data.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="image-wrapper">
              <img src={item.img} alt="client" className="client-img" />

              <img src={playBtn} alt="play" className="play-btn" />
            </div>

            <h3 className="client-name">Krish Bruynson</h3>
            <p className="client-role">Director, Starlot</p>

            <div className="stars">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
}
