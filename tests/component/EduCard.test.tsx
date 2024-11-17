import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { EduCard } from "../../src/components/EduCard";

describe("Education card", () => {
    test("Loads and displays the title in the education card", () => {
        const TEST_ID = "edu-card__title";
        const TEST_VALUE = "Education";

        render(
            <BrowserRouter>
                <EduCard />
            </BrowserRouter>,
        );

        const titleContent = screen.getByTestId(TEST_ID).textContent;

        expect(titleContent).toBe(TEST_VALUE);
    });

    test("Loads and displays the text in the education card", () => {
        const TEST_ID = "edu-card__text";
        const TEST_VALUE = "Petrozavodsk State University";

        render(
            <BrowserRouter>
                <EduCard />
            </BrowserRouter>,
        );

        const textContent = screen.getByTestId(TEST_ID).textContent;

        expect(textContent).toContain(TEST_VALUE);
    });
});
