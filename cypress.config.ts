import { defineConfig } from "cypress"

export default defineConfig({
  projectId: "an9y25",

  component: {
    viewportHeight: 600,
    viewportWidth: 600,
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000",
  },
})
