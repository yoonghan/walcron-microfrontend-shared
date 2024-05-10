import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from ".";
import { describe, it, expect } from "vitest";

describe("Accordion", () => {
  const renderAccordion = (isSingle?: boolean) =>
    render(
      <Accordion
        model={[
          {
            label: "Item 1",
            content: "1 Lorem ipsum dolor sit amet!",
          },
          {
            label: "Item 2",
            content: "Here i am.",
          },
          {
            label: "Item 3",
            content:
              "Click on a <a href=https://www.zoonegara.my>link here</a>",
          },
        ]}
        groupName="faq"
        isSingle={isSingle}
      ></Accordion>
    );

  it("should render component as radio by default", async () => {
    renderAccordion();
    expect(screen.getByRole("radio", { name: "Item 1" })).toBeInTheDocument();
  });

  it("should render as checkbox if isSingle false", () => {
    renderAccordion(false);
    expect(
      screen.getByRole("checkbox", { name: "Item 2" })
    ).toBeInTheDocument();
  });

  it("should uncheck a checked radio", () => {
    renderAccordion();
    const radio = screen.getByRole("radio", { name: "Item 1" });
    userEvent.click(radio);
    expect(radio).toBeChecked();

    userEvent.click(radio);
    expect(radio).not.toBeChecked();
  });

  it("should be able to render content with html reactnode", () => {
    const { getByRole } = renderAccordion();
    expect(getByRole("link", { name: "link here" })).toHaveAttribute(
      "href",
      "https://www.zoonegara.my"
    );
  });
});
