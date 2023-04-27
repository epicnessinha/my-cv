import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DarkModeContext, DarkModeProvider } from "../context/DarkModeContext";
import React, { useContext } from "react";

const TestComponent: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <p>Dark mode is: {darkMode ? "On" : "Off"}</p>
      <button onClick={toggleDarkMode}>Toggle dark mode</button>
    </>
  );
};

describe("DarkModeContext", () => {
    test("toggles dark mode value", async () => {
      render(
        <DarkModeProvider>
          <TestComponent />
        </DarkModeProvider>
      );
  
      const initialText = screen.getByText(/Dark mode is: Off/i);
      expect(initialText).toBeInTheDocument();
  
      const toggleButton = screen.getByText(/Toggle dark mode/i);
      await act(async () => {
        toggleButton.click();
      });
  
      const updatedText = screen.getByText(/Dark mode is: On/i);
      expect(updatedText).toBeInTheDocument();
    });
  });
  