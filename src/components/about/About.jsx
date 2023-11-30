import React from "react";
import "./about.css";
import Moi from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>En savoir plus</h5>
      <h2>À propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Moi} alt="Moi" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Expérience</h5>
              <small>Encore en formation</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Lorem ipsum.</h5>
              <small>Lorem ipsum.</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Pour le moment aucun</small>
            </article>
          </div>

          <p>
            Je suis un très jeune développeur à peine sortie de formation. J'ai
            connu la joie du code en début d'année 2023 et j'ai pour projet de
            continuer à évoluer dans ce milieu. Je trouve le fait de coder très
            satisfaisant.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contactez-moi !
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
