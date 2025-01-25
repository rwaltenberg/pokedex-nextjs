import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

import Favorite from "./Favorite"

describe("Favorite component", () => {
  it("applies additional class names passed via props", () => {
    render(<Favorite isFavorite={false} className="extra-class" />)
    const heart = screen.getByRole("switch")
    expect(heart).toHaveClass("extra-class")
  })

  it("forwards other props to the icon component", () => {
    render(<Favorite isFavorite={false} aria-label="Test label" />)
    const heart = screen.getByRole("switch")
    expect(heart).toHaveAttribute("aria-label", "Test label")
  })
})
