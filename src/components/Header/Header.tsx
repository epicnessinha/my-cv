import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext"
import "../../styles/main.scss"
import { NavLink } from "react-router-dom";


const Header: React.FC = () => {
   const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

   return (
      <header className={`header ${darkMode ? "dark" : ""}`}>
         <h1>My Curriculum Vitae</h1>
         <NavLink to={"/"}> Home </NavLink>
         <NavLink to={"experience"}> Experience </NavLink>
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
