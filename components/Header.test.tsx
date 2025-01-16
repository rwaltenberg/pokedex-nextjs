import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

import Header from "./Header"

describe("Header", () => {
  it("renders the logo", () => {
    render(<Header />)
    const logo = screen.getByRole("img", { name: "Pokedex Logo" })
    expect(logo).toBeInTheDocument()
  })

  it("renders the title", () => {
    render(<Header />)
    const title = screen.getByRole("heading", { name: "Pokedex" })
    expect(title).toBeInTheDocument()
  })

  it("renders the ThemeSwitcher component", () => {
    render(<Header />)
    const themeSwitcher = screen.getByRole("button", { name: "Change theme" })
    expect(themeSwitcher).toBeInTheDocument()
  })
})
