import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import "../../styles/main.scss";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className={`header ${darkMode ? "dark" : ""}`}>
      <h1>My Curriculum Vitae</h1>
      <NavLink to={"/"} className={darkMode ? "nav-link-dark" : ""}>
        Home
      </NavLink>
      <NavLink to={"experience"} className={darkMode ? "nav-link-dark" : ""}>
        Experience
      </NavLink>
      <NavLink to={"contacts"} className={darkMode ? "nav-link-dark" : ""}>
        Contacts
      </NavLink>
      <a
        href="https://vanessaferreira-portfolio.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className={darkMode ? "nav-link-dark" : ""}
      >
        Portfolio
      </a>
      <button
        className={`dark-mode-button${darkMode ? " active" : ""}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
