import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorPage from ".";

describe("ErrorPage", () => {
  it("should render error page with default messages", () => {
    render(<ErrorPage />);
    expect(screen.getByText("Oops!")).toBeInTheDocument();
    expect(
      screen.getByText("Sorry, an unexpected error has occurred.")
    ).toBeInTheDocument();
    expect(screen.getByText("Error message is unknown.")).toBeInTheDocument();
  });

  it("should render statusText", () => {
    render(<ErrorPage statusText="Status unknown." />);
    expect(screen.getByText("Status unknown.")).toBeInTheDocument();
  });

  it("should render message", () => {
    render(<ErrorPage message="Message unknown." />);
    expect(screen.getByText("Message unknown.")).toBeInTheDocument();
  });
});
