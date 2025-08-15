import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Accordion from "."
import { describe, it, expect } from "vitest"

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
            content: (
              <span>
                Click on a <a href="https://www.zoonegara.my">link here</a>
              </span>
            ),
          },
        ]}
        groupName="faq"
        isSingle={isSingle}
      ></Accordion>,
    )

  it("should render component as radio by default", async () => {
    renderAccordion()
    expect(screen.getByRole("radio", { name: "Item 1" })).toBeInTheDocument()
  })

  it("should render as checkbox if isSingle false", () => {
    renderAccordion(false)
    expect(screen.getByRole("checkbox", { name: "Item 2" })).toBeInTheDocument()
  })

  it("should uncheck a checked radio", async () => {
    renderAccordion()
    const radio = screen.getByRole("radio", { name: "Item 1" })
    await userEvent.click(radio)
    expect(radio).toBeChecked()

    await userEvent.click(radio)
    expect(radio).not.toBeChecked()
  })

  it("should be able to render content with html reactnode", () => {
    const { getByRole } = renderAccordion()
    expect(getByRole("link", { name: "link here" })).toHaveAttribute(
      "href",
      "https://www.zoonegara.my",
    )
  })

  it("should add 'selectable' classname if javascript is enabled", async () => {
    const { getByText } = renderAccordion()
    const item1 = "Item 1"
    const firstItemElement = getByText(item1).parentElement
    if (firstItemElement !== null) {
      expect(firstItemElement).toHaveClass("selectable")
    }
  })
})
