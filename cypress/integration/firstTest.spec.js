/// <reference types="cypress"/>


describe('Test with backend', () => {

    beforeEach('Login to the app', () => {
        //create server, because wanna override the route  
        cy.server()
        //intercept the original route and override the return value by my tags.json
        cy.route('GET', '**/tags', 'fixture:tags.json')
        cy.loginToApplication()
    })

    it('verify correct request and response', () => {
        
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

    it('verify global feed likes count', () => {
        //create route for our articles laced
        //get response information from feed(xhr)
        //cy.screenshot('before-fill-in-article')
        cy.route('GET', '**/articles/feed*', '{"articles":[],"articlesCount":0}')
        //get article.json from global feed response(xhr)
        cy.route('GET', '**/articles*', 'fixture:articles.json')

        cy.contains('Global Feed').click()
        //cy.screenshot('after-fill-in-article')

        //get number of likes
        cy.get('app-article-list button').then(listOfButtons => {
            expect(listOfButtons[0]).to.contain('5')
            expect(listOfButtons[1]).to.contain('3')
        })

    })
})
