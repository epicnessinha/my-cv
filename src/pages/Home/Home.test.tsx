import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Home', () => {
  it('renders the home component correctly', () => {
    render(<Home />);
    expect(screen.getByText('Vanessa Ferreira')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });
});
