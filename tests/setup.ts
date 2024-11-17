import { afterEach, expect } from "@jest/globals";
import * as matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";

expect.extend(matchers);

afterEach(() => cleanup());
