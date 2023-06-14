import Copyright from ".";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Copyright", () => {
  it("should render default copyright", () => {
    render(<Copyright lastUpdatedYear={2003} />);
    const link = screen.getByRole("link", { name: "Walcron" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
    expect(screen.getByText(/^Copyright ©.*2003\.$/)).toBeInTheDocument();
  });

  it("should render copyright with new overridden data", () => {
    render(
      <Copyright
        companyName="Ababas"
        link="https://www.walcron.com"
        lastUpdatedYear={2004}
      />
    );
    const link = screen.getByRole("link", { name: "Ababas" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://www.walcron.com");
    expect(screen.getByText(/^Copyright ©.*2004\.$/)).toBeInTheDocument();
  });
});
