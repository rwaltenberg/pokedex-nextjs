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

  it("renders correctly in dark theme", () => {
    mountComponent(mockBulbasour)

    cy.findByRole("img", { name: "bulbasaur" })
      .should("exist")
      .and("have.prop", "complete", true)
    cy.findByRole("img", { name: "grass" }).should(
      "have.prop",
      "complete",
      true,
    )
    cy.findByRole("img", { name: "poison" }).should(
      "have.prop",
      "complete",
      true,
    )

    cy.matchImageSnapshot("poke-card", {
      failureThreshold: 0.005,
      failureThresholdType: "percent",
    })
  })

  it("renders correctly in light theme", () => {
    mountComponent(mockCharmander, "light")

    cy.findByRole("img", { name: "charmander" }).should(
      "have.prop",
      "complete",
      true,
    )

    cy.findByRole("img", { name: "fire" }).should("have.prop", "complete", true)

    cy.matchImageSnapshot("poke-card-light", {
      failureThreshold: 0.005,
      failureThresholdType: "percent",
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
