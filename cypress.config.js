const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 3600000, // Set page load timeout to 1 hour
    video: false, // Disable video recording
    screenshotOnRunFailure: false, // Disable screenshots on failure
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--disable-extensions');
          launchOptions.args.push('--disable-background-networking');
        }
        return launchOptions;
      });
    },
  },
});
