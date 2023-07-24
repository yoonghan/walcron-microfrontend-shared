import { describe, it, expect } from "vitest";
import { Copyright, Footer, Logo, placeholder } from ".";

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
  });

  describe("helpers", () => {
    it("should export placeholder until some real tools is created", () => {
      expect(placeholder).toBeDefined();
    });
  });
});
