const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
    viewportmobile: {
      device: "iphone-xr",
    },
    viewportdesktop: {
      device: "macbook-16",
    },
  },
  e2e: {
    baseUrl: "https://www.edenentradas.com.ar/",
    setupNodeEvents(on, config) {
      require("@bahmutov/cy-grep/src/plugin")(config);
      // IMPORTANT: return the config object
      return config;
    },
  },
});