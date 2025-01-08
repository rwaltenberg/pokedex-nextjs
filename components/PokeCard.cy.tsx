/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="@simonsmith/cypress-image-snapshot/types" />

import { mount } from "cypress/react18"
import React from "react"

import mockPokemon from "@/cypress/mock/pokemon"

import PokeCard from "./PokeCard"

describe("PokeCard Component", () => {
  before(() => {
    cy.readFile("cypress/mock/bulbasour.png", null).then((img) => {
      cy.intercept("_next/image*", {
        statusCode: 200,
        headers: { "Content-Type": "image/png" },
        body: img.buffer,
      }).as("image")
    })
  })

  it("renders the pokemon card with correct details", () => {
    mount(
      <div className="p-3">
        <PokeCard pokemon={mockPokemon} />
      </div>,
    )

    cy.wait("@image")

    cy.findByText("#1").should("exist")
    cy.findByText("bulbasaur").should("exist")
    cy.findByRole("img").should("exist").and("have.prop", "complete", true)

    cy.matchImageSnapshot("poke-card")
  })

  it("does not render the image if not available from the api", () => {
    const mockPokemonWithoutImage = {
      ...mockPokemon,
      spriteList: [
        {
          id: 1,
          sprites: {
            other: {
              "official-artwork": {
                front_default: "",
              },
            },
          },
        },
      ],
    }

    mount(
      <div className="p-3">
        <PokeCard pokemon={mockPokemonWithoutImage} />
      </div>,
    )

    cy.findByRole("img").should("not.exist")
  })
})
