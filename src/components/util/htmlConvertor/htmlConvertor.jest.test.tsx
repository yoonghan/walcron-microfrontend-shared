import { render } from "@testing-library/react"
import { htmlConvertor } from "."
import { describe, it, expect } from "vitest"

const createLink = (link: string, text: string) => <a href={link}>{text}</a>

describe("HTML Convertor", () => {
  it("will render normal text correctly", () => {
    expect(
      render(htmlConvertor("hello world", createLink)).baseElement.innerHTML,
    ).toBe("<div>hello world</div>")
  })

  it("will replace all new lines with spaces", () => {
    expect(
      render(htmlConvertor("hello\nworld", createLink)).baseElement.innerHTML,
    ).toBe("<div>hello world</div>")
  })

  describe("change astrick to bold", () => {
    it("will render with bold correctly", () => {
      expect(
        render(htmlConvertor("hello *world", createLink)).baseElement.innerHTML,
      ).toBe("<div>hello <strong>world</strong></div>")
    })

    it("will not render a standalone asterik in center", () => {
      expect(
        render(htmlConvertor("hello * world", createLink)).baseElement
          .innerHTML,
      ).toBe("<div>hello * world</div>")
    })
  })

  describe("change square bracket to anchor link", () => {
    it("will render normal link correctly", () => {
      const { getByRole } = render(
        htmlConvertor("[https://www.google.com|Google]", createLink),
      )
      expect(getByRole("link", { name: "Google" })).toHaveAttribute(
        "href",
        "https://www.google.com",
      )
    })

    it("will not render a standalone [ to link", () => {
      expect(
        render(htmlConvertor("hello [link world", createLink)).baseElement
          .innerHTML,
      ).toBe("<div>hello [link world</div>")
    })

    it("will render text to link that is with space", () => {
      const { getByRole } = render(
        htmlConvertor("[/visitors/about-us|About Us]", createLink),
      )
      expect(getByRole("link", { name: "About Us" })).toHaveAttribute(
        "href",
        "/visitors/about-us",
      )
    })

    it("will render asterick text with | wrapped with link", () => {
      const { getByRole } = render(
        htmlConvertor("hello [/link|*world i know is the best]", createLink),
      )
      expect(
        getByRole("link", { name: "*world i know is the best" }),
      ).toHaveAttribute("href", "/link")
    })

    it("can render link that ends with ,(comma) and .(dot)", () => {
      const component = render(
        htmlConvertor(
          "Let's [/link1|here], or [/link2|there] or [/link3|end].",
          createLink,
        ),
      )
      expect(
        component.getByRole("link", {
          name: "here",
        }),
      ).toHaveAttribute("href", "/link1")
      expect(
        component.getByRole("link", {
          name: "there",
        }),
      ).toHaveAttribute("href", "/link2")
    })
  })

  describe("change any new lines into new lines!", () => {
    it("will change any ! into line break", () => {
      const component = render(
        htmlConvertor("Hi there !! How are you?", createLink),
      )
      expect(component.baseElement.innerHTML).toBe(
        "<div>Hi there <br> How are you?</div>",
      )
    })
  })
})
