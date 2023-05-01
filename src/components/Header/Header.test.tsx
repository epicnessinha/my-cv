import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  test('renders Header component', () => {
    render(
      <BrowserRouter>
        <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode: () => {} }}>
          <Header />
        </DarkModeContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Curriculum Vitae')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contacts')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  test('toggles dark mode when button is clicked', () => {
    const toggleDarkMode = jest.fn();

    render(
      <BrowserRouter>
        <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode }}>
          <Header />
        </DarkModeContext.Provider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Dark Mode'));
    expect(toggleDarkMode).toHaveBeenCalledTimes(1);
  });
});
