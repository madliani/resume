import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ExpCard } from "../../src/components/ExpCard";

describe("Experience card", () => {
    test("Loads and displays the title in the experience card", () => {
        const TEST_ID = "exp-card__title";
        const TEST_VALUE = "Experience";

        render(
            <BrowserRouter>
                <ExpCard />
            </BrowserRouter>,
        );

        const titleContent = screen.getByTestId(TEST_ID).textContent;

        expect(titleContent).toBe(TEST_VALUE);
    });

    test("Loads and displays the text in the experience card", () => {
        const TEST_ID = "exp-card__text";
        const TEST_VALUE = "inter://so";

        render(
            <BrowserRouter>
                <ExpCard />
            </BrowserRouter>,
        );

        const textContent = screen.getByTestId(TEST_ID).textContent;

        expect(textContent).toContain(TEST_VALUE);
    });
});
