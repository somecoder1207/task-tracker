import { render, screen } from '@testing-library/react';
import App from './App';

test('renders task tracker title', () => {
  render(<App />);
  const linkElement = screen.getByText(/task tracker/i);
  expect(linkElement).toBeInTheDocument();
});
