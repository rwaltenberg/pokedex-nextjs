import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from "@simonsmith/cypress-image-snapshot/plugin"

export default defineConfig({
  projectId: "an9y25",

  component: {
    viewportHeight: 600,
    viewportWidth: 600,
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on)
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000"
  },
});
