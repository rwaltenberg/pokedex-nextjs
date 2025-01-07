// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands"
import "@/app/globals.css"

import { mount } from "cypress/react18"

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add("mount", (component, options) => {
  const Wrapper = () => (
    <div className="font-inter antialiased h-full w-full">{component}</div>
  )

  const mountChain = mount(<Wrapper />, options)

  cy.document({ log: false }).then((doc) => {
    cy.log("Checking if Inter font is loaded")
    cy.wrap(doc.fonts, { log: false })
      .invoke({ log: false }, "check", "16px Inter")
      .should("be.true")
  })

  return mountChain
})

// Example use:
// cy.mount(<MyComponent />)
