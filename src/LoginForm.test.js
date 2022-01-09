import React from 'react';
import {act, fireEvent, render} from '@testing-library/react';

import LoginForm from "./LoginForm";
import {BrowserRouter} from "react-router-dom";

describe('LoginForm', () => {
    test('renders Login component', () => {
        const component = render(<BrowserRouter><LoginForm/></BrowserRouter>);
        const usernameLabel = component.getByText("Username");
        expect(usernameLabel).toBeInTheDocument();
    });

    test('username field should have label', () => {
        const component = render(<BrowserRouter><LoginForm/></BrowserRouter>);
        const usernameInput = component.getByLabelText("Username");
        expect(usernameInput.getAttribute('name')).toBe('username');
    })

    test('password field should have label', () => {
        const component = render(<BrowserRouter><LoginForm/></BrowserRouter>);
        const passwordInput = component.getByLabelText("Password");
        expect(passwordInput.getAttribute('name')).toBe('password');
    })

    test('username input should accept text', async () => {
        const { getByLabelText } = render(<BrowserRouter><LoginForm/></BrowserRouter>);
        const usernameInput = getByLabelText("Username");
        expect(usernameInput.value).toMatch("");
        await act(async () => {
            fireEvent.change(usernameInput, {target: {value: 'test'}});
        })
        expect(usernameInput.value).toMatch('test');
    })

    test('password input should accept text', async () => {
        const { getByLabelText } = render(<BrowserRouter><LoginForm/></BrowserRouter>);
        const passwordInput = getByLabelText("Password");
        expect(passwordInput.value).toMatch("");
        await act(async () => {
            fireEvent.change(passwordInput, {target: {value: 'test'}});
        })
        expect(passwordInput.value).toMatch('test');
    })
});
