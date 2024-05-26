import { beforeAll, afterAll, afterEach, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

beforeAll(() => {
  global.ga = () => {};
});

afterAll(() => {
  delete global.ga;
});
