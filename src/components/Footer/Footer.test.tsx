import Footer from ".";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  const currentYear = new Date().getFullYear();

  it("should display year with default value", () => {
    render(<Footer lastUpdatedYear={2024} />);
    const footerMessage = `Walcron 2014 - ${currentYear} ©`;
    expect(screen.getByText(footerMessage)).toBeInTheDocument();
  });

  it("should override company name and year started", () => {
    render(
      <Footer companyName="Abc" establishedYear={2020} lastUpdatedYear={2024} />
    );
    const footerMessage = `Abc 2020 - ${currentYear} ©`;
    expect(screen.getByText(footerMessage)).toBeInTheDocument();
  });
});
