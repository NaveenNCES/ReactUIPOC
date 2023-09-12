import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

test('Should set state values and should call axios endpoint', () => {
    const { getByPlaceholderText } = render(<SignUpPage />);
    const rollNumberInput = getByPlaceholderText('Roll Number');
    const dobInput = getByPlaceholderText('DD/MM/YYYY');
    const firstNameInput = getByPlaceholderText('Firstname');
    const lastNameInput = getByPlaceholderText('Lastname');
    const addressInput = getByPlaceholderText('City name');
    const bloodGroupInput = getByPlaceholderText('Blood group');
    const classInput = getByPlaceholderText('Class name');

    fireEvent.change(rollNumberInput, { target: { value: '1713050' } });
    fireEvent.change(dobInput, { target: { value: '09/08/2000' } });
    fireEvent.change(firstNameInput, { target: { value: 'Mohan' } });
    fireEvent.change(lastNameInput, { target: { value: 'R' } });
    fireEvent.change(addressInput, { target: { value: 'Chennai' } });
    fireEvent.change(bloodGroupInput, { target: { value: 'O+' } });
    fireEvent.change(classInput, { target: { value: 'A' } });

    expect(rollNumberInput).toHaveValue('1713050');
    expect(dobInput).toHaveValue('09/08/2000');
    expect(firstNameInput).toHaveValue('Mohan');
    expect(lastNameInput).toHaveValue('R');
    expect(addressInput).toHaveValue('Chennai');
    expect(bloodGroupInput).toHaveValue('O+');
    expect(classInput).toHaveValue('A');
})

test('Should return please enter rollNumber', () => {
    render(<SignUpPage />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    const linkElement = screen.getByText(/Please enter rollNumber/i);
    expect(linkElement).toBeInTheDocument();
})

test('Should return please enter dateOfBirth', () => {
    render(<SignUpPage />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    const linkElement = screen.getByText(/Please enter dateOfBirth/i);
    expect(linkElement).toBeInTheDocument();
})

test('Should return Please enter firstname', () => {
    render(<SignUpPage />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    const linkElement = screen.getByText(/Please enter firstname/i);
    expect(linkElement).toBeInTheDocument();
})

test('Should return Please enter lastname', () => {
    render(<SignUpPage />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    const linkElement = screen.getByText(/Please enter lastname/i);
    expect(linkElement).toBeInTheDocument();
})

test('Should return Please enter class', () => {
    render(<SignUpPage />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    const linkElement = screen.getByText(/Please enter class/i);
    expect(linkElement).toBeInTheDocument();
})

test('Should return Please enter bloodGroup', () => {
    render(<SignUpPage />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    const linkElement = screen.getByText(/Please enter bloodGroup/i);
    expect(linkElement).toBeInTheDocument();
})

test('Should return Please enter address', () => {
    render(<SignUpPage />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    const linkElement = screen.getByText(/Please enter address/i);
    expect(linkElement).toBeInTheDocument();
})

test('Should set state values and should call axios endpoint', async () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const { getByPlaceholderText } = render(<SignUpPage />);

    const rollNumberInput = getByPlaceholderText('Roll Number');
    const dobInput = getByPlaceholderText('DD/MM/YYYY');
    const firstNameInput = getByPlaceholderText('Firstname');
    const lastNameInput = getByPlaceholderText('Lastname');
    const addressInput = getByPlaceholderText('City name');
    const bloodGroupInput = getByPlaceholderText('Blood group');
    const classInput = getByPlaceholderText('Class name');

    fireEvent.change(rollNumberInput, { target: { value: '1713050' } });
    fireEvent.change(dobInput, { target: { value: '09/08/2000' } });
    fireEvent.change(firstNameInput, { target: { value: 'Mohan' } });
    fireEvent.change(lastNameInput, { target: { value: 'R' } });
    fireEvent.change(addressInput, { target: { value: 'Chennai' } });
    fireEvent.change(bloodGroupInput, { target: { value: 'O+' } });
    fireEvent.change(classInput, { target: { value: 'A' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
        expect(spy).toHaveBeenCalled();
    })
})

test('Should navigate to login page', async () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const { getByPlaceholderText } = render(<SignUpPage />);

    const rollNumberInput = getByPlaceholderText('Roll Number');
    const dobInput = getByPlaceholderText('DD/MM/YYYY');
    const firstNameInput = getByPlaceholderText('Firstname');
    const lastNameInput = getByPlaceholderText('Lastname');
    const addressInput = getByPlaceholderText('City name');
    const bloodGroupInput = getByPlaceholderText('Blood group');
    const classInput = getByPlaceholderText('Class name');

    fireEvent.change(rollNumberInput, { target: { value: '1713050' } });
    fireEvent.change(dobInput, { target: { value: '09/08/2000' } });
    fireEvent.change(firstNameInput, { target: { value: 'Mohan' } });
    fireEvent.change(lastNameInput, { target: { value: 'R' } });
    fireEvent.change(addressInput, { target: { value: 'Chennai' } });
    fireEvent.change(bloodGroupInput, { target: { value: 'O+' } });
    fireEvent.change(classInput, { target: { value: 'A' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
        expect(spy).toHaveBeenCalled();
        expect(window.location.pathname).toBe('/');
    })
})