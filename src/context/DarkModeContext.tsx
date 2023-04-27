import React, { createContext, useState, ReactNode } from "react";

interface DarkModeContextType {
   darkMode: boolean;
   toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
   darkMode: false,
   toggleDarkMode: () => {},
});

interface DarkModeProviderProps {
   children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
   const [darkMode, setDarkMode] = useState(false);

   const toggleDarkMode = () => {
      setDarkMode(!darkMode);
   };

   return (
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
         {children}
      </DarkModeContext.Provider>
   );
};
