import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Home from "../../pages/Home/Home"
import Experience from "../../pages/Experience/Experience"
import Contacts from "../../components/Contacts/Contacts"


const Layout: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };


   return (
    
       <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Router>
         <Header />
         <div className={`layout-container ${darkMode ? "dark" : ""}`}>
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/experience" element={<Experience darkMode={false} />} />
         <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </DarkModeContext.Provider>
  );
};

export default Layout;



