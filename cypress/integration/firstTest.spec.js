/// <reference types="cypress"/>


describe('Test with backend', () => {

    beforeEach('Login to the app', () => {
        //create server, because wanna override the route  
        //delete serve because intercept dont need anymore
        //cy.server()
        //cy.route('GET', '**/tags', 'fixture:tags.json') // old method

        //replace route to intercept method and override the return value by my tags.json
        // refacture cy.intercept('GET', '**/tags', {fixture:'tags.json'}) // cy.intercept(method, url, routeHandler)
        cy.intercept({method:'Get', path:'tags'}, {fixture:'tags.json'})
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

    it('intercepting and modifying the resquest and response', () => {
        // type and modify the description sent to browser using this method below
        //sent "This is a description" and on browser appear "This is a description 2"
        // cy.intercept('POST', '**/articles', (request) => {
        //     //request
        //     request.body.article.description = "This is a description 2"
        // }).as('postArticles')

        //modify the response
        cy.intercept('POST', '**/articles', (request) => {
            //response , replay and get our replay from our server 
            request.reply( res => {
                expect(res.body.article.description).to.equal('This is a description')
                res.body.article.description = 'This is a description 2'
            })
        }).as('postArticles')


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
            expect(xhr.response.body.article.description).to.equal('This is a description 2')
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
    //delete article
    it('delete a new article in a global feed', () => {
        //create user variable //disable bacause was refacture the request 1 was changed for function above it
        // const userCresentials = {
        //     "user": {
        //         "email": "carolzitafarmaceutica@gmail.com",
        //         "password": "041359999"
        //     }
        // }

        //create body const 
        const bodyRequest = {
            "article": {
                "tagList": [],
                "title": "Request from API",
                "description": "API testing is easy ",
                "body": "Angular is cool"
            }
        }


        cy.get('@token').then( token => {
            
       
        //REQUESTS 1 // dsiable and refacture because I using the funtionality above
        //first: got this method from postman, we can find all on headers 
        // cy.request('POST', 'https://conduit.productionready.io/api/users/login', userCresentials)
        // //this response have body, and get this body(user and token(grab it))
        // .its('body').then(body => {
        //     const token = body.user.token

            //REQUESTS 2: create new article. we provide objecta dn inside espcify the param nedd to pass in
             //this url came from my postman or headers from network
             //headers is a object autho and token and provide value previous test
            cy.request({
                url: Cypress.env('apiUrl')+'api/articles/',
                headers: {'Authorization': 'Token '+token},
                method: 'POST',
                body: bodyRequest
            }).then(response => {
                expect(response.status).to.equal(200)
            })
            //go to application delete de article and re-run  your test on localhost and will appear again

            //now delete from UI
            //after click inspect and take value class of first article
            cy.contains('Global Feed').click()
            cy.get('.article-preview').first().click()
            cy.get('.article-actions').contains('Delete Article').click()

            //verify if the article was deleted
            //go to global feed and verify if the article doesn't exist
            //verify if the text our bodyrequest was delete
            //go to your feed, clear the network and click on global feed
            //get the api that appear in network
            cy.request({
                url: Cypress.env('apiUrl')+'api/articles?limit=10&offset=0',
                headers: {'Authorization': 'Token '+token},
                method: 'GET'
            }).its('body').then( body =>{
                //console.log(body) //look for the console body the title aand expect
                 expect(body.articles[0].title).not.equal('Request from API')
                if(body.articles[0].title !== 'Request from API'){
                    cy.log('404 (Not Found)')
                    console.log('404 (Not Found)')
                }
               
            })
            
        })
    })
})
