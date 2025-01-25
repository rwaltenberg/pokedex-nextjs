import { describe, expect, it, jest } from "@jest/globals"
import { userEvent } from "@storybook/test"
import { render, screen } from "@testing-library/react"
import React from "react"

import { mockBulbasaur } from "@/test/mock/pokemon"

import PokeCard from "./PokeCard"

describe("PokeCard", () => {
  describe("Image priority", () => {
    it("applies priority to the image when priorityImage is true", () => {
      render(<PokeCard pokemon={mockBulbasaur} priorityImage />)
      const image = screen.getByAltText("bulbasaur")
      expect(image).toHaveAttribute("fetchpriority", "high")
    })
  })

  describe("Favorite functionality", () => {
    it("displays a heart icon if the user can favorite a pokemon", () => {
      const { rerender } = render(<PokeCard pokemon={mockBulbasaur} />)
      expect(
        screen.queryByRole("switch", { name: "Favorite" }),
      ).not.toBeInTheDocument()

      rerender(<PokeCard pokemon={mockBulbasaur} canFavorite />)
      expect(
        screen.getByRole("switch", { name: "Favorite" }),
      ).toBeInTheDocument()
    })

    it("calls onFavorite when the favorite icon is clicked", async () => {
      const onFavoriteMock = jest.fn()
      render(
        <PokeCard
          pokemon={mockBulbasaur}
          canFavorite
          isFavorite={false}
          onFavorite={onFavoriteMock}
        />,
      )
      const favoriteIcon = screen.getByRole("switch", { name: "Favorite" })
      await userEvent.click(favoriteIcon)

      expect(onFavoriteMock).toHaveBeenCalledWith(true)
    })
  })
})
