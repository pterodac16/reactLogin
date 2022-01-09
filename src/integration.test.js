import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import user from "@testing-library/user-event";

window.alert = jest.fn();

test("Can log in and out of application", async () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Sign in")).toBeInTheDocument();

    user.type(screen.getByLabelText("Username"), "admin");
    user.type(screen.getByLabelText("Password"), "password");
    user.click(screen.getByText("Sign in"));
    window.alert.mockClear();

    await screen.findByText("Log Out");
    expect(screen.getByText("Log Out")).toBeInTheDocument();
    user.click(screen.getByText("Log Out"));

    await screen.findByText("Login");
    expect(screen.getByText("Login")).toBeInTheDocument();
})
