import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Receipt from "./Components/Receipt/Receipt";

describe("Ui pages testing", () => {
    test("Main page with tickets", async () => {
        render(
            <Main />
        );

        expect(screen.getByText("SUBJECT")).toBeInTheDocument();
        expect(screen.getByText("STATUS")).toBeInTheDocument();
    });
    test("Header", async () => {
        render(
            <Header />
        );

        expect(screen.getByText("Zendesk Ticket Viewer")).toBeInTheDocument();
    });
    test("Ticket view", async () => {
        render(
            <Receipt />
        );

        expect(screen.getByText("Description")).toBeInTheDocument();
        expect(screen.getByText("Priority")).toBeInTheDocument();
        expect(screen.getByText("Status")).toBeInTheDocument();
    });
});
