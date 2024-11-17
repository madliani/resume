import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "../../src/components/SEO";

describe("SEO", () => {
    test("Loads and displays the home page title", async () => {
        const TEST_VALUE = "Resume | Home";

        render(
            <HelmetProvider>
                <SEO title="Home" />
            </HelmetProvider>,
        );

        await waitFor(() => {
            expect(document.title).toBe(TEST_VALUE);
        });
    });
});
