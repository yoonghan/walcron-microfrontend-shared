import { describe, it, expect } from "vitest";
import {
  ErrorPage,
  NavigatorListener,
} from "./components/helpers/react-router";
import { Copyright, Footer, Logo } from "./components";

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

    describe("helpers", () => {
      describe("react-router", () => {
        it("should expose ErrorPage", () => {
          expect(ErrorPage).toBeDefined();
        });

        it("should expose NavigatorListener", () => {
          expect(NavigatorListener).toBeDefined();
        });
      });
    });
  });
});
