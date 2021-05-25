/// <reference types="cypress"/>


describe('Test with backend', () => {

    beforeEach('Login to the app', () => {
        //create server, because wanna override the route  
        cy.server()
        //intercept the original route and override the return value by my tags.json
        cy.route('GET', '**/tags', 'fixture:tags.json')
        cy.loginToApplication()
    })

    it('verufy correct request and response', () => {
        
        //create cypress server
        cy.server()
        //intercept the original route 
        cy.route('POST', '**/articles').as('postArticles')

        cy.contains('New Article').click()
        cy.get('[formcontrolname="title"]').type('Carol')
        cy.get('[formcontrolname="description"]').type('This is a description')
        cy.get('[formcontrolname="body"]').type('This is a body of the Article')
        cy.contains('Publish Article').click()
        //after click wait until this call will be completed, called as(alias) on cy.wait
        cy.wait('@postArticles')
        cy.get('@postArticles').then( xhr => {
            console.log(xhr)
            expect(xhr.status).to.equal(200)
            expect(xhr.request.body.article.body).to.equal('This is a body of the Article')
            expect(xhr.response.body.article.description).to.equal('This is a description')
        })

        
    })

    it('should gave tag with routing object', () =>{  
        //before login I used another route 
        cy.get('.tag-list')
        .should('contain', 'cypress')
        .and('contain', 'automation')
        .and('contain', 'testing')
    })
})
