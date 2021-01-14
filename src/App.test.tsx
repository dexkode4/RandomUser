import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to your dashboard, kindly sort through the user base/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders three categories of button', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(3)
});

it('renders five summarycards', async () => {
  render(<App />);
  await waitFor(() => {
    const summarycards = screen.getAllByTestId('summary-card')
    expect(summarycards.length).toBe(5)
  });
});