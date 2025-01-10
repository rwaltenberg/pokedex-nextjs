/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="@simonsmith/cypress-image-snapshot/types" />

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

  it("renders the pokemon card with correct details", () => {
    mountComponent(mockBulbasour)

    cy.findByText("#0001").should("exist")
    cy.findByText("bulbasaur").should("exist")
    cy.findByRole("img", { name: "bulbasaur" })
      .should("exist")
      .and("have.prop", "complete", true)
    cy.findByText("grass").should("exist")
    cy.findByText("poison").should("exist")

    cy.matchImageSnapshot("poke-card")
  })

  it("renders the pokemon card in light theme", () => {
    mountComponent(mockCharmander, "light")
    cy.matchImageSnapshot("poke-card-light")
  })

  it("renders the correct amount of types of the pokemon", () => {
    mountComponent(mockCharmander)
    cy.findByText("fire").should("exist").siblings().should("have.length", 0)
  })

  it("renders the icon of the pokemon type", () => {
    mountComponent(mockCharmander)
    cy.findByRole("img", { name: "fire" }).should("exist")
  })
})
