/// <reference types="cypress"/>


describe('Test with backend', () => {

    beforeEach('Login to the app', () => {
        cy.loginToApplication()
    })

    it('verufy correct request and response', () => {
        
        //create cypress server
        cy.server()
        //Request post URL: https://conduit.productionready.io/api/articles/
        cy.route('POST', '**/articles').as('postArticles')

        cy.contains('New Article').click()
        cy.get('[formcontrolname="title"]').type('This is a title')
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
})
