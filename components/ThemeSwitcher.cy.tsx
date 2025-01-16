/// <reference types="@testing-library/cypress" />

import { ThemeProvider } from "next-themes"
import React from "react"

import { ThemeSwitcher } from "./ThemeSwitcher"

describe("ThemeSwitcher Component", () => {
  const mountComponent = () => {
    cy.mount(
      <div className="grid place-items-center h-screen">
        <ThemeProvider>
          <ThemeSwitcher />
        </ThemeProvider>
      </div>,
    )
  }

  it("changes the theme when a theme option is selected", () => {
    mountComponent()
    cy.findByRole("button", { name: "Change theme" }).click()
    cy.findByText("Light").click()
    cy.findByRole("img", { name: "light" }).should("exist")
  })
})
