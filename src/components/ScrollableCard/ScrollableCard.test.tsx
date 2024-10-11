import { describe, it, expect } from "vitest";
import ScrollableCard from ".";
import { render, screen } from "@testing-library/react";

describe("ScrollableCard", () => {
  it("should render card correctly", () => {
    render(
      <ScrollableCard
        model={[
          { content: "I am card # 1" },
          { content: "I am card # 2" },
          { content: "I am card # 3" },
        ]}
        className="supported-class"
        data-testid={"test"}
      ></ScrollableCard>
    );

    expect(screen.getByText("I am card # 1")).toBeInTheDocument();
    expect(screen.getByText("I am card # 2")).toBeInTheDocument();
    expect(screen.getByText("I am card # 3")).toBeInTheDocument();

    expect(screen.getByText("I am card # 3").parentElement).toHaveClass(
      "supported-class"
    );
  });
});
