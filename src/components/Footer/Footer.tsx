import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext"
import "../../styles/main.scss"

const Footer: React.FC = () => {
   const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

   return (
      <footer className={`footer ${darkMode ? "dark" : ""}`}>
         <p>Footer Content</p>
         <button
  className={`dark-mode-button${darkMode ? " active" : ""}`}
  onClick={toggleDarkMode}
>
  {darkMode ? "Light Mode" : "Dark Mode"}
</button>

      </footer>
   );
};

export default Footer;
