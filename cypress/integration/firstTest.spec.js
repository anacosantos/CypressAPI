/// <reference types="cypress"/>


describe('Test with backend', () => {

    beforeEach('Login to the app', () => {
        //create server, because wanna override the route  
        //delete serve because intercept dont need anymore
        //cy.server()
        //cy.route('GET', '**/tags', 'fixture:tags.json')

        //replace route to intercept method and override the return value by my tags.json
        cy.intercept('GET', '**/tags', {fixture:'tags.json'}) // cy.intercept(method, url, routeHandler)
        cy.loginToApplication()
    })

    it('verify correct request and response', () => {
        
        //create cypress server
        // cy.server() delete because of intercept
        //intercept the original route 
        cy.intercept('POST', '**/articles').as('postArticles')

        cy.contains('New Article').click()
        cy.get('[formcontrolname="title"]').type('Cypress test')
        cy.get('[formcontrolname="description"]').type('This is a description')
        cy.get('[formcontrolname="body"]').type('This is a body of the Article')
        cy.contains('Publish Article').click()
        //after click wait until this call will be completed, called as(alias) on cy.wait
        cy.wait('@postArticles')
        cy.get('@postArticles').then( xhr => {
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(200)
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
        cy.intercept('GET', '**/articles/feed*', {"articles":[],"articlesCount":0})
        //get article.json from global feed response(xhr)
        cy.intercept('GET', '**/articles*', {fixture:'articles.json'})

        cy.contains('Global Feed').click()
        //cy.screenshot('after-fill-in-article')

        //get number of likes
        cy.get('app-article-list button').then(listOfButtons => {
            expect(listOfButtons[0]).to.contain('5')
            expect(listOfButtons[1]).to.contain('3')
        })

        //article.json we modify slug string from de second article 
        cy.fixture('articles').then(file => {
            const articleLink = file.articles[1].slug 
            cy.intercept('POST', '**articles/'+articleLink+'/favorite', file)
        })

        cy.get('app-article-list button')
        .eq(1)
        .click()
        .should('contain', '4')

    })
    
})
