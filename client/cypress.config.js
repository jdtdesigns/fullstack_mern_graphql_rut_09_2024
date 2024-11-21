import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('after:run', (results) => {
        // Exit the process with the appropriate exit code
        if (results.totalFailed > 0) {
          process.exit(1); // Exit with a non-zero code if there are test failures
        } else {
          process.exit(0); // Exit with a zero code if all tests pass
        }
      });
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
