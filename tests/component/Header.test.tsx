import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../src/components/Header";

describe("Header", () => {
    test("Loads and displays the title in the header", () => {
        const TEST_ID = "header__title";
        const TEST_VALUE = "madliani";

        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        );

        const titleContent = screen.getByTestId(TEST_ID).textContent;

        expect(titleContent).toBe(TEST_VALUE);
    });

    test("Loads and displays the GitHub icon in the header", () => {
        const TEST_ID = "header__github-icon";
        const TEST_VALUE = "https://github.com/madliani";

        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        );

        const iconHRef = screen.getByTestId(TEST_ID).getAttribute("href");

        expect(iconHRef).toBe(TEST_VALUE);
    });

    test("Loads and displays the email icon in the header", () => {
        const TEST_ID = "header__email-icon";
        const TEST_VALUE = "mailto:madliani@hotmail.com";

        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        );

        const iconHRef = screen.getByTestId(TEST_ID).getAttribute("href");

        expect(iconHRef).toBe(TEST_VALUE);
    });
});
