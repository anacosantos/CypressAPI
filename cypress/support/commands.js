// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToApplication', () =>{
    //headless authorization
    const userCresentials = {
        "user": {
            "email": "carolzitafarmaceutica@gmail.com",
            "password": "041359999"
        }
    }

    cy.request('POST', 'https://conduit.productionready.io/api/users/login', userCresentials)
        .its('body').then(body => {
            const token = body.user.token
            //using alias cypress
            cy.wrap(token).as('token')
            //go to home page, because assume we already authenticate it and need provide option
            //to our visit that log before event. use window object and window., want local storage, set item, item name is jwtToken and value token
            cy.visit('/', {
                onBeforeLoad (win){
                    win.localStorage.setItem('jwtToken', token)
                }
            })
        })
    
    //login application
    // cy.visit('/login')
    // cy.get('[placeholder="Email"]').type('carolzitafarmaceutica@gmail.com')
    // cy.get('[placeholder="Password"]').type('041359999')
    // cy.get('form').submit()
})