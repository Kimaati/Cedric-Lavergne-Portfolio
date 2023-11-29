import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_sl8xclg",
      "template_xar8lyh",
      form.current,
      "YBU5EKM9oS5a5cBZl"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contactez-moi !</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>cedric.lavergn04@hotmail.fr</h5>
            <a href="mailto:cedric.lavergn04@hotmail.fr">Envoyez un mail !</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Cédric Lavergne</h5>
            <a
              href="https://m.me/100003103975086"
              target="_blank"
              rel="noreferrer"
            >
              Écrivez-moi !
            </a>
          </article>
          <article className="contact__option">
            <BiLogoLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Cédric Lavergne</h5>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
            >
              Écrivez-moi !
            </a>
          </article>
        </div>
        {/* Fin de contact__option */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nom et prénom" required />
          <input type="email" name="email" placeholder="Votre mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Votre message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyez le message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
