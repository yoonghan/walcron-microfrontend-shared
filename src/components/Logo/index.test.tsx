import Logo from ".";
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";

describe("Logo", () => {
  it("should display a logo", () => {
    render(<Logo />);
    expect(screen.getByText("Logo")).toBeInTheDocument();
  });

  it("should display a logo with green color", () => {
    render(<Logo color="green" />);
    const logoText = screen.getByText("Logo");
    expect(within(logoText).getByText("green")).toBeInTheDocument();
  });
});
