import { describe, it, expect } from "vitest";
import {
  Accordion,
  Announcement,
  useNavigationListener,
  debounce,
  htmlConvertor,
  useWindowListener,
  MiniMenu,
  Menu,
  MutableMenu,
  reportWebVitals,
  ScrollableCard,
} from ".";

describe("Integration test", () => {
  describe("components", () => {
    it("should expose Accordion", () => {
      expect(Accordion).toBeDefined();
    });

    it("should expose Announcement", () => {
      expect(Announcement).toBeDefined();
    });

    it("should expose MiniMenu", () => {
      expect(MiniMenu).toBeDefined();
    });

    it("should expose Menu", () => {
      expect(Menu).toBeDefined();
    });

    it("should expose MutableMenu", () => {
      expect(MutableMenu).toBeDefined();
    });

    it("should expose ScrollableCard", () => {
      expect(ScrollableCard).toBeDefined();
    });
  });

  describe("helpers", () => {
    it("should export useNavigationListener", () => {
      expect(useNavigationListener).toBeDefined();
    });

    it("should export reportWebVitals", () => {
      expect(reportWebVitals).toBeDefined();
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

    it("should export htmlConvertor", () => {
      expect(htmlConvertor).toBeDefined();
    });
  });
});
