const { defineConfig } = require("cypress");

module.exports = defineConfig({
  devServer: {
    command: "npm run start",
    port: 3000,
    host: "localhost",
  },
});
