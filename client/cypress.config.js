import { defineConfig } from "cypress";
import whyIsNodeRunning from "why-is-node-running";

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
