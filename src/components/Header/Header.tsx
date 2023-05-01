import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { NavLink } from "react-router-dom";
import "../../styles/main.scss"
import "../../components/Header/header.scss"

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className={`header ${darkMode ? "dark" : ""}`}>
      <h1>Curriculum Vitae</h1>
      <nav className="nav-links">
      <NavLink to={"/"} className={darkMode ? "nav-link-dark" : ""}>
        Home
      </NavLink>
      <NavLink to={"about"} className={darkMode ? "nav-link-dark" : ""}>
        About Me
      </NavLink>
      <NavLink to={"education"} className={darkMode ? "nav-link-dark" : ""}>
        Education
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
      </nav>
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
