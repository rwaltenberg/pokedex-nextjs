/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="@simonsmith/cypress-image-snapshot/types" />

import React from "react"

import Home from "./page"

describe("<Home />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />)
    cy.findAllByRole("img").should("be.visible")
    cy.matchImageSnapshot("home")
  })
})
