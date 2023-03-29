const { defineConfig } = require("cypress");

module.exports = defineConfig({
  testFiles: "**/*.{spec,test}.js",
  devServer: {
    command: "npm run start",
    port: 3000,
    host: "localhost",
  },
  e2e: {
    specPattern: 'cypress/components/**/*.spec.{js,ts,jsx,tsx}'
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});




