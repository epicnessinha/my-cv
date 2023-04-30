import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../ContactForm/ContactForm";
import { DarkModeContext } from "../../context/DarkModeContext";
import "../../styles/main.scss";
import "./contacts.scss";

const Contacts: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`contacts-container ${darkMode ? "dark" : ""}`}>
      <h2>Contacts</h2>
      <div className="contact-cards">
        <div className="card phone-card">
          <FontAwesomeIcon className="icon" icon="phone" />
          <div className="card-info">
            <p className="label">Phone</p>
            <p>+351 910085402</p>
          </div>
        </div>
        <div className="card email-card">
          <FontAwesomeIcon className="icon" icon="envelope" />
          <div className="card-info">
            <p className="label">Email</p>
            <p>vanessa.ferreira.dev@gmail.com</p>
          </div>
        </div>
        <div className="card linkedin-card">
          <FontAwesomeIcon className="icon" icon={["fab", "linkedin"]} />
          <div className="card-info">
            <p className="label">LinkedIn</p>
            <p>/vanessabio</p>
          </div>
        </div>
        <div className="card github-card">
          <FontAwesomeIcon className="icon" icon={["fab", "github"]} />
          <div className="card-info">
            <p className="label">GitHub</p>
            <p>/epicnessinha</p>
          </div>
        </div>
      </div>

      <h3 className="send-me">Send me a message:</h3>
      <ContactForm />
    </div>
  );
};

export default Contacts;
