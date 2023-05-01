import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { DarkModeContext } from '../../context/DarkModeContext';
import Footer from './Footer';

describe('Footer', () => {
  test('renders Footer component', () => {
    render(
      <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode: () => {} }}>
        <Footer />
      </DarkModeContext.Provider>
    );

    expect(screen.getByText('Vanessa Ferreira, 2023. All Rights Reserved.')).toBeInTheDocument();
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  test('toggles dark mode when button is clicked', () => {
    const toggleDarkMode = jest.fn();

    render(
      <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode }}>
        <Footer />
      </DarkModeContext.Provider>
    );

    fireEvent.click(screen.getByText('Dark Mode'));
    expect(toggleDarkMode).toHaveBeenCalledTimes(1);
  });
});
