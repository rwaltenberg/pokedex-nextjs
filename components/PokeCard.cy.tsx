/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="@simonsmith/cypress-image-snapshot/types" />

import { mount } from "cypress/react18"
import React from "react"

import { mockBulbasour, mockCharmander } from "@/cypress/mock/pokemon"

import PokeCard from "./PokeCard"

describe("PokeCard Component", () => {
  beforeEach(() => {
    cy.intercept("_next/image*", (req) => {
      req.url = new URL(req.url).searchParams.get("url") ?? req.url
    })
  })

  it("renders the pokemon card with correct details", () => {
    mount(
      <div className="grid place-items-center h-screen">
        <div className="w-1/2">
          <PokeCard pokemon={mockBulbasour} />
        </div>
      </div>,
    )

    cy.findByText("#1").should("exist")
    cy.findByText("bulbasaur").should("exist")
    cy.findByRole("img", { name: "bulbasaur" })
      .should("exist")
      .and("have.prop", "complete", true)
    cy.findByText("grass").should("exist")
    cy.findByText("poison").should("exist")

    cy.matchImageSnapshot("poke-card")
  })

  it("renders the correct amount of types of the pokemon", () => {
    mount(
      <div className="grid place-items-center h-screen">
        <div className="w-1/2">
          <PokeCard pokemon={mockCharmander} />
        </div>
      </div>,
    )

    cy.findByText("fire").should("exist").siblings().should("have.length", 0)
  })
})
