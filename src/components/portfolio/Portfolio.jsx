import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Riding Cities.",
    github: "https://github.com/Kimaati/Chapitre_2",
    demo: "https://dribbble.com/following",
  },
  {
    id: 2,
    image: IMG2,
    title: "Oh My Food.",
    github: "https://github.com/Kimaati/Chapitre_4",
    demo: "https://dribbble.com/following",
  },
  {
    id: 3,
    image: IMG3,
    title: "Kasa Immobilier.",
    github: "https://github.com/Kimaati/Chapitre_8",
    demo: "https://dribbble.com/following",
  },
  {
    id: 4,
    image: IMG4,
    title: "Sophie Bluel Architecte",
    github: "https://github.com/Kimaati/Chapitre_6",
    demo: "https://dribbble.com/following",
  },
  {
    id: 5,
    image: IMG5,
    title: "Print It.",
    github: "https://github.com/Kimaati/Chapitre_5",
    demo: "https://dribbble.com/following",
  },
  {
    id: 6,
    image: IMG6,
    title: "Nina Carducci Photographe.",
    github: "https://github.com/Kimaati/Chjapitre_9",
    demo: "https://dribbble.com/following",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mon travail récent</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                {/* <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
