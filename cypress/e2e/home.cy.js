/// <reference types="cypress" />

describe("Home", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("displays the the pokemon cards", () => {
    cy.findByText("bulbasaur").should("exist")
  })
})
