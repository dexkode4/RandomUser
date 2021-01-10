import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders All users', () => {
  render(<App />);
  const linkElement = screen.getByText(/All users/i);
  expect(linkElement).toBeInTheDocument();
});
