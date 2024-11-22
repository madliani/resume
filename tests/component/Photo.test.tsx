import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Photo } from "../../src/components/Photo";

describe("Photo", () => {
    test("Loads and displays the photo", () => {
        const TEST_ID = "photo";
        const TEST_VALUE = "Me";

        render(
            <BrowserRouter>
                <Photo />
            </BrowserRouter>,
        );

        const photoAlt = screen.getByTestId(TEST_ID).getAttribute("alt");

        expect(photoAlt).toBe(TEST_VALUE);
    });
});
