import Logo from "."
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe("Logo", () => {
  it("should display a logo", () => {
    render(<Logo/>)
    expect(screen.getByText("Logo")).toBeInTheDocument()
  })
})
