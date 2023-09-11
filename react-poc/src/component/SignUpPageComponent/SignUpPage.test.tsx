import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpPage from './SignUpPage';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate,
}));

test('renders SignUp Here text', () => {
  render(<SignUpPage />);
  const linkElement = screen.getByText(/SignUp Here/i);
  expect(linkElement).toBeInTheDocument();
});