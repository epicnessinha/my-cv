import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { DarkModeContext } from '../../context/DarkModeContext';
import Contacts from './Contacts';

describe('Contacts', () => {
  test('renders Contacts component', () => {
    render(
      <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode: () => {} }}>
        <Contacts />
      </DarkModeContext.Provider>
    );

    expect(screen.getByText('Contacts')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('+351 910085402')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('vanessa.ferreira.dev@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  test('clicking LinkedIn opens the link in a new tab', () => {
    const openSpy = jest.spyOn(window, 'open').mockImplementation(() => null);

    render(
      <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode: () => {} }}>
        <Contacts />
      </DarkModeContext.Provider>
    );

    fireEvent.click(screen.getByText('LinkedIn'));
    expect(openSpy).toHaveBeenCalledWith('https://www.linkedin.com/in/vanessabio', '_blank');
  });

  test('clicking GitHub opens the link in a new tab', () => {
    const openSpy = jest.spyOn(window, 'open').mockImplementation(() => null);

    render(
      <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode: () => {} }}>
        <Contacts />
      </DarkModeContext.Provider>
    );

    fireEvent.click(screen.getByText('GitHub'));
    expect(openSpy).toHaveBeenCalledWith('https://github.com/epicnessinha', '_blank');
  });
});
