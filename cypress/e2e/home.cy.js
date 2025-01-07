/// <reference types="cypress" />

describe("Home", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("displays the Next logo", () => {
    cy.get("img").should("exist")
  })
})
