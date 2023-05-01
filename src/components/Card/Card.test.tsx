/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

describe('Card', () => {
  const defaultProps = {
    title: 'Frontend Developer',
    company: 'XING',
    description: 'Frontend Developer description',
    startDate: new Date('2022-09-01'),
    school: '',
    darkMode: false,
  };

  let view: ReturnType<typeof render>;

  beforeEach(() => {
    view = render(<Card {...defaultProps} />);
  });

  it('renders the card with the provided props', () => {
    expect(view.getByText(defaultProps.title)).toBeInTheDocument();
    expect(view.getByText(defaultProps.company)).toBeInTheDocument();
    expect(view.getByText(/⌛/)).toBeInTheDocument();
  });

  it('expands the card to show more details when clicked', async () => {
    const expandButton = view.getByTestId('job-item-header');

    fireEvent.click(expandButton);

    await waitFor(() => {
      expect(view.getByText(defaultProps.description)).toBeInTheDocument();
    });
  });

  it('collapses the card when clicked again', async () => {
    const expandButton = view.getByTestId('job-item-header');

    fireEvent.click(expandButton);

    await waitFor(() => {
      expect(view.getByText(defaultProps.description)).toBeInTheDocument();
    });

    fireEvent.click(expandButton);

    await waitFor(() => {
      expect(view.queryByText(defaultProps.description)).not.toBeInTheDocument();
    });
  });
});
