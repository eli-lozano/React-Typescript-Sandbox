import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDefaultScreen from '../ReactDefaultScreen';

test('renders learn react link', () => {
  render(<ReactDefaultScreen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
