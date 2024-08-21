import { describe, it, expect } from "vitest";
import {
  Accordion,
  Announcement,
  Copyright,
  ErrorPage,
  Footer,
  Logo,
  useNavigationListener,
  debounce,
  htmlConvertor,
  useWindowListener,
  MiniMenu,
  Menu,
  MutableMenu,
  reportWebVitals,
  gtagReportHandler,
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

    it("should expose Accordion", () => {
      expect(Accordion).toBeDefined;
    });

    it("should expose Announcement", () => {
      expect(Announcement).toBeDefined;
    });

    it("should expose MiniMenu", () => {
      expect(MiniMenu).toBeDefined;
    });

    it("should expose Menu", () => {
      expect(Menu).toBeDefined;
    });

    it("should expose MutableMenu", () => {
      expect(MutableMenu).toBeDefined;
    });
  });

  describe("helpers", () => {
    it("should export useNavigationListener", () => {
      expect(useNavigationListener).toBeDefined();
    });

    it("should export reportWebVitals", () => {
      expect(reportWebVitals).toBeDefined();
    });

    it("should export gtagReportHandler", () => {
      expect(gtagReportHandler).toBeDefined();
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
