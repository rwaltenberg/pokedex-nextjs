import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import React from "react"

import { mockBulbasaur } from "@/test/mock/pokemon"

import PokeCard from "./PokeCard"

describe("PokeCard", () => {
  it("displays the correct Pokemon number", () => {
    render(<PokeCard pokemon={mockBulbasaur} />)
    expect(screen.getByText("#0001")).toBeInTheDocument()
  })

  it("displays the correct Pokemon name", () => {
    render(<PokeCard pokemon={mockBulbasaur} />)
    expect(screen.getByText("bulbasaur")).toBeInTheDocument()
  })

  it("displays the correct Pokemon image", () => {
    render(<PokeCard pokemon={mockBulbasaur} />)
    const image = screen.getByAltText("bulbasaur")
    expect(image).toHaveAttribute("src", expect.stringContaining("1.png"))
  })

  it("displays the correct Pokemon types", () => {
    render(<PokeCard pokemon={mockBulbasaur} />)
    expect(screen.getByText("grass")).toBeInTheDocument()
    expect(screen.getByText("poison")).toBeInTheDocument()
  })

  it("applies priority to the image when priorityImage is true", () => {
    render(<PokeCard pokemon={mockBulbasaur} priorityImage />)
    const image = screen.getByAltText("bulbasaur")
    expect(image).toHaveAttribute("fetchpriority", "high")
  })

  it("has role group by default", () => {
    render(<PokeCard pokemon={mockBulbasaur} />)
    expect(screen.getByRole("group")).toBeInTheDocument()
  })
})
