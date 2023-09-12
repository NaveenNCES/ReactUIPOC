import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import NavBar from '../NavBar/NavBar';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate,
}));

test('renders user text', () => {
    const users = {
        firstName: 'Chinna',
        lastName: 'A',
        rollNumber: '1713060',
        dateOfBirth: '09/08/2000',
        class: 'V',
        bloodGroup: 'A+',
        address: 'Chennai'
    }
    sessionStorage.setItem('student', JSON.stringify(users));

    render(<HomePage />);
    const linkElement = screen.getByText(/Welcome Chinna/i);
    const rollNumberInput = screen.getByText(/1713060/i);
    const firstNameInput = screen.getByText(/Chinna A/i);
    const addressInput = screen.getByText(/Chennai/i);

    expect(rollNumberInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
});

test('should contain Guide name', () => {
    render(<HomePage />);
    const linkElement = screen.getByText(/Maths Guide/i);
    expect(linkElement).toBeInTheDocument();
});