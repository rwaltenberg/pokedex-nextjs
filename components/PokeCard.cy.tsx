/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import React from "react"

import { mockBulbasour, mockCharmander } from "@/cypress/mock/pokemon"
import { Pokemon } from "@/types/pokemon"

import PokeCard from "./PokeCard"

const mountComponent = (pokemon: Pokemon, theme: "dark" | "light" = "dark") => {
  cy.document({ log: false })
    .its("documentElement", { log: false })
    .its("classList", { log: false })
    .invoke({ log: false }, "toggle", "dark", theme === "dark")

  cy.mount(
    <div className="grid place-items-center h-screen">
      <div className="w-1/2">
        <PokeCard pokemon={pokemon} />
      </div>
    </div>,
  )
}

describe("PokeCard Component", () => {
  beforeEach(() => {
    cy.intercept("_next/image*", (req) => {
      req.url = new URL(req.url).searchParams.get("url") ?? req.url
    })
  })

  it("renders the pokemon number", () => {
    mountComponent(mockBulbasour)
    cy.findByText("#0001").should("exist")
  })

  it("renders the pokemon name", () => {
    mountComponent(mockCharmander)
    cy.findByText("charmander").should("exist")
  })

  it("renders the correct amount of types of the pokemon", () => {
    mountComponent(mockCharmander)
    cy.findByText("fire").should("exist").siblings().should("have.length", 0)

    mountComponent(mockBulbasour)
    cy.findByText("grass").should("exist").siblings().should("have.length", 1)
  })

  it("renders the icon of the pokemon type", () => {
    mountComponent(mockCharmander)
    cy.findByRole("img", { name: "fire" }).should("exist")
  })
})
