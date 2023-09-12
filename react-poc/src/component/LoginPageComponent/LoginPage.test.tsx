import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';

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

test('Should set state values and should call axios endpoint', () => {
    const { getByPlaceholderText } = render(<LoginPage />);
    const rollNumberInput = getByPlaceholderText('RollNumber');
    const dobInput = getByPlaceholderText('DD/MM/YYYY');

    fireEvent.change(rollNumberInput, { target: { value: '1713050' } });
    fireEvent.change(dobInput, { target: { value: '09/08/2000' } });

    expect(rollNumberInput).toHaveValue('1713050');
    expect(dobInput).toHaveValue('09/08/2000');
})

test('Should return please enter rollNumber', () => {
    render(<LoginPage />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    const linkElement = screen.getByText(/Please enter rollNumber/i);
    expect(linkElement).toBeInTheDocument();
})

test('Should return please enter dateOfBirth', () => {
    render(<LoginPage />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    const linkElement = screen.getByText(/Please enter dateOfBirth/i);
    expect(linkElement).toBeInTheDocument();
})

test('Should set state values and should call axios endpoint', async () => {
    const { getByPlaceholderText } = render(<LoginPage />);

    const rollNumberInput = getByPlaceholderText('RollNumber');
    const dobInput = getByPlaceholderText('DD/MM/YYYY');

    fireEvent.change(rollNumberInput, { target: { value: '1713050' } });
    fireEvent.change(dobInput, { target: { value: '09/08/2000' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
        expect(sessionStorage.getItem("student")).toBeTruthy();
    })
})