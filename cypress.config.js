import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //1. Environment-specific configuration - You can dynamically adjust your Cypress configuration based on the environment (development, staging, production) or other conditions.
      //2. Custom tasks - Define custom tasks to perform actions in the Node.js environment that are not possible in the browser.
      //3. Integrating with third-party tools -Code coverage tools,Visual testing tools,Reporting services


    },
  },
});
