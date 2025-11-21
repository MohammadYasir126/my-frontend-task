import React from "react";
import "../styles/tech.css";

import arrowImg from "../assets/img-6.png";

import icon7 from "../assets/img-7.png";
import icon8 from "../assets/img-8.png";
import icon9 from "../assets/img-9.png";
import icon10 from "../assets/img-10.png";
import icon11 from "../assets/img-11.png";
import icon12 from "../assets/img-12.png";

const cards = [
  {
    title: "Backend Development",
    icon: icon7,
    accent: "#EAF3FF",
    borderColor: "#CFE6FF",
    tags: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
  },
  {
    title: "Fronted Development",
    icon: icon8,
    accent: "#FFF3E6",
    borderColor: "#FFDEC2",
    tags: ["HTML", "CSS", "JS", "REACT", "VUE", "ANGULAR", "SASS", "TAILWIND"],
  },
  {
    title: "Mobile Development",
    icon: icon9,
    accent: "#FBF0FF",
    borderColor: "#F1D9FF",
    tags: ["KOTLIN", "SWIFT", "REACT NATIVE", "FLUTTER", "IONIC"],
  },
  {
    title: "Blockchain, Ai/ML",
    icon: icon10,
    accent: "#E8FFFA",
    borderColor: "#CFF8EE",
    tags: [
      "SMART CONTRACTS",
      "PYTORCH",
      "TENSORFLOW",
      "GANS",
      "DATA PIPELINES",
    ],
  },
  {
    title: "DevOps & Low-Code",
    icon: icon11,
    accent: "#FFFDE6",
    borderColor: "#FFF6C8",
    tags: ["DOCKER", "KUBERNETES", "CI/CD", "ANSIBLE", "JENKINS"],
  },
  {
    title: "E-commerce & CMS",
    icon: icon12,
    accent: "#FFF2EF",
    borderColor: "#FFDCD5",
    tags: ["MAGENTO", "SHOPIFY", "WORDPRESS", "HEADLESS CMS"],
  },
];

export default function TechnologyCategory() {
  return (
    <section className="tech-section">
      <img src={arrowImg} alt="arrow" className="tech-arrow" />

      <div className="tech-inner">
        <header className="tech-header">
          <h2 className="tech-title">Our Diverse Technology Competency</h2>
          <p className="tech-sub">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been
            <br />
            The Industry's Standard Dummy Text Ever Since
          </p>
        </header>

        <div className="cards-grid">
          {cards.map((c) => (
            <article
              className="tech-card"
              key={c.title}
              style={{
                background: `linear-gradient(180deg, ${c.accent} 0%, rgba(255,255,255,0.94) 100%)`,
                borderBottom: `6px solid ${c.borderColor}`,
              }}
            >
              <div className="card-top">
                <img src={c.icon} className="card-icon" alt="" />
                <h3 className="card-title">{c.title}</h3>
              </div>

              <ul className="tag-list">
                {c.tags.map((t, i) => (
                  <li className="tag" key={i}>
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
