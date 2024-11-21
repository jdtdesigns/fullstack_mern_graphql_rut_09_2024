import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `http://localhost:${process.env.PORT}`,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
