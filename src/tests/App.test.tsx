import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders My Curriculum Vitae title', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /My Curriculum Vitae/i });
  expect(titleElement).toBeInTheDocument();
});
