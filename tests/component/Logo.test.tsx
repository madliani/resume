import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Logo } from "../../src/components/Logo";

describe("Logo", () => {
    test("Loads and displays the logo", () => {
        const TEST_ID = "logo";
        const TEST_VALUE = "Logotype";

        render(
            <BrowserRouter>
                <Logo />
            </BrowserRouter>,
        );

        const logoAlt = screen.getByTestId(TEST_ID).getAttribute("alt");

        expect(logoAlt).toBe(TEST_VALUE);
    });
});
