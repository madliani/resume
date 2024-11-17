import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AboutCard } from "../../src/components/AboutCard";

describe("About card", () => {
    test("Loads and displays the title in the about card", () => {
        const TEST_ID = "about-card__title";
        const TEST_VALUE = "About me";

        render(
            <BrowserRouter>
                <AboutCard />
            </BrowserRouter>,
        );

        const titleContent = screen.getByTestId(TEST_ID).textContent;

        expect(titleContent).toBe(TEST_VALUE);
    });

    test("Loads and displays the text in the about card", () => {
        const TEST_ID = "about-card__text";
        const TEST_VALUE = "I'm an experienced frontend developer";

        render(
            <BrowserRouter>
                <AboutCard />
            </BrowserRouter>,
        );

        const textContent = screen.getByTestId(TEST_ID).textContent;

        expect(textContent).toContain(TEST_VALUE);
    });
});
