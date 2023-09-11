import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import mockAxios from 'jest-mock-axios';
import { AppConstant } from '../constant/AppConstant';
import axios from 'axios';

const mock = jest.mock('axios');
const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate,
}));

test('renders Login Here test', () => {
    render(<LoginPage />);
    const linkElement = screen.getByText(/Login Here/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Login Here test', () => {
    render(<LoginPage />);
    const users = {
        firstName: '',
        lastName: '',
        rollNumber: '1713050',
        dateOfBirth: '09/08/2000',
        class: '',
        bloodGroup: '',
        address: ''
    }
    mockAxios.post.mockResolvedValueOnce(users);

    expect(mockAxios.post).toHaveBeenCalledWith(`${AppConstant.URL}${AppConstant.GetSelectedStudentDetails}`, users);

});

// test('Should return please enter rollNumber', () => {
//     render(<LoginPage />);

//     const button = screen.getByRole('button');
//     fireEvent.click(button);
//     const linkElement = screen.getByText(/Please enter rollNumber/i);
//     expect(linkElement).toBeInTheDocument();
// })

// test('Should return please enter dateOfBirth', () => {
//     render(<LoginPage />);

//     const button = screen.getByRole('button');
//     fireEvent.click(button);
//     const linkElement = screen.getByText(/Please enter dateOfBirth/i);
//     expect(linkElement).toBeInTheDocument();
// })