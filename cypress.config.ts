import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.spec.ts",
    // specPattern: 'src/**/*.cy.ts',
  },
});
