/* eslint-disable testing-library/prefer-screen-queries */
// Footer.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DarkModeContext } from '../../context/DarkModeContext';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer content', () => {
    const { getByText } = render(
      <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode: () => {} }}>
        <Footer />
      </DarkModeContext.Provider>
    );

    expect(getByText('Footer Content')).toBeInTheDocument();
  });

  it('toggles dark mode on button click', () => {
    const toggleDarkMode = jest.fn();
    const { getByText } = render(
      <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode }}>
        <Footer />
      </DarkModeContext.Provider>
    );

    const darkModeButton = getByText('Dark Mode');
    fireEvent.click(darkModeButton);

    expect(toggleDarkMode).toHaveBeenCalledTimes(1);
  });
});
