/// <reference types="cypress"/>

describe('Test with backend', () => {

    beforeEach('Login to the app', () => {
        cy.loginToApplication()
    })

    it('should log in', () => {
        cy.log('Yeeey we logged in!')
    })
})

// go to network and filter ALL