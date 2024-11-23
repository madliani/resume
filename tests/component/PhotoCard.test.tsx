import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PhotoCard } from "../../src/components/PhotoCard";

describe("Photo", () => {
    test("Loads and displays the photo card photo", () => {
        const TEST_ID = "photo-card__photo";
        const TEST_VALUE = "Me";

        render(
            <BrowserRouter>
                <PhotoCard />
            </BrowserRouter>,
        );

        const photoAlt = screen.getByTestId(TEST_ID).getAttribute("alt");

        expect(photoAlt).toBe(TEST_VALUE);
    });

    test("Loads and displays the photo card button", () => {
        const TEST_ID = "photo-card__button";
        const TEST_VALUE = "Download CV";

        render(
            <BrowserRouter>
                <PhotoCard />
            </BrowserRouter>,
        );

        const buttonText = screen.getByTestId(TEST_ID).textContent;

        expect(buttonText).toBe(TEST_VALUE);
    });
});
