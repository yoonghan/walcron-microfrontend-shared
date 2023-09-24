import { describe, it, expect } from "vitest";
import {
  Copyright,
  ErrorPage,
  Footer,
  Logo,
  useNavigationListener,
  debounce,
  useWindowListener,
} from ".";

describe("Integration test", () => {
  describe("components", () => {
    it("should expose Copyright", () => {
      expect(Copyright).toBeDefined;
    });

    it("should expose Footer", () => {
      expect(Footer).toBeDefined;
    });

    it("should expose Logo", () => {
      expect(Logo).toBeDefined;
    });

    it("should expose ErrorPage", () => {
      expect(ErrorPage).toBeDefined;
    });
  });

  describe("helpers", () => {
    it("should export useNavigationListener", () => {
      expect(useNavigationListener).toBeDefined();
    });
  });

  describe("hooks", () => {
    it("should export useWindowListener", () => {
      expect(useWindowListener).toBeDefined();
    });
  });

  describe("util", () => {
    it("should export debounce", () => {
      expect(debounce).toBeDefined();
    });
  });
});
