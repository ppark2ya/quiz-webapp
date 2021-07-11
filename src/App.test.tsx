import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App.tsx Web Page', () => {
  render(<App />);
  const linkElement = screen.getByText(/지원하지 않는 장비입니다./i);
  expect(linkElement).toBeInTheDocument();
});
