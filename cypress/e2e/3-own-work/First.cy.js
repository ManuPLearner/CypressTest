
/// <reference types="cypress"/>
describe('FirstTestSuite', () => {
  
      it('Verify the Positive TC', () => {
        cy.visit('https://demo.nopcommerce.com/') 
        cy.title().should('eq','nopCommerce demo store')
      })
  })