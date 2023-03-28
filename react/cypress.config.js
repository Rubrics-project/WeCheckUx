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
