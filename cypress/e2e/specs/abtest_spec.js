

import ABTestPage from "../pageObjects/ABTestPage";

describe('A/B Testing', () => {
    beforeEach(() => {
        cy.visit('/abtest'); // Uses baseUrl from cypress.config.js
    })

    it('verifies A/B test variations and paragraphs using custom commands and page object', () => {
        
    })
})