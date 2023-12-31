import React from "react";
import CV from "../../assets/CV-Cédric-Lavergne.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Télécharger mon CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contactez-moi !
      </a>
    </div>
  );
};

export default CTA;
