
## My Cypress Summary

Cypress

Preparing environment
- Install : chrome, node.js, git, VScode

Open cloned file and take nom install and npm start

Cypress Installation:
Go to cypress.io:
Command : npm install cypress --save-dev

Cypress runner:
npx cypress open(examples test and folders)
ex. Login function :Cypress.Commands.add('login', (email, password) => { ... })
Or overwrite : Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
File cypress integration/examples: many examples about tests

Cypress.json
-change different default settings for this cypress
The basic config is: 
Go to google type: cypress configuration
Open:https://docs.cypress.io/guides/references/configuration

First of all: baseUrl config

{
    "baseUrl": "https://localhost:4200",
    "ignoreTestFiles": "**/examples/*",
    "viewportHeight": 768,
    "viewportWidth": 1024
}

Or

{
    "baseUrl": "http://localhost:4200",
    "ignoreTestFiles": "**/examples/*",
    "viewportHeight": 1080,
    "viewportWidth": 1920
}

 
The test start with:
describe() or context(), you diced what you will use 

To start use cypress method, have to import <reference types="cypress"/>
Start use cy.
ex. cy.visit(), cy.get()…..

Commands to open:
npm start
npx cypress open

Always to import and export:
Export class blábláblá {}
And below : export const yesyeyes = new blablabla()

**************************************************
Create on commands:
GO TO COMMANDS.JS
Cypress.Commands.add('openHomePage', () => {
    cy.visit('/')
})
Use this on:
 beforeEach('open the application', () =>{
        cy.openHomePage()
    })

Custom Commands
:https://docs.cypress.io/api/cypress-api/custom-commands


jQuery 
Syntax	Description	Example
$("*")	Selects all elements	Try it
$(this)	Selects the current HTML element	Try it
$("p.intro")	Selects all <p> elements with class="intro"	Try it
$("p:first")	Selects the first <p> element	Try it
$("ul li:first")	Selects the first <li> element of the first <ul>	Try it
$("ul li:first-child")	Selects the first <li> element of every <ul>	Try it
$("[href]")	Selects all elements with an href attribute	Try it
$("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"	Try it
$("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"	Try it
$(":button")	Selects all <button> elements and <input> elements of type="button"	Try it
$("tr:even")	Selects all even <tr> elements	Try it
$("tr:odd")	Selects all odd <tr> elements	
it.only(‘blablablablabla’, () => { } ) just execute this test

*CYPRESS COMMANDS
It.only() - just do this test
It.skip() - skip this test
cy.visit() - go to web page
Cy.get() - find element entire DOM
Cy.parents()- came from current and key element you’re in
Cy.find() - child elements inside of parents
 Cy.content():
cy.contains(content)
cy.contains(content, options)
cy.contains(selector, content)
cy.contains(selector, content, options)
expect().to.equal()
.type('Cypress.io{enter}') - botao e enter
.check({force: true}) - usado qd esta escondido (visually-hidden)
just check ,but not uncheck
.eq()- pega o index do array
Para escrever o should()
Use os comandos - Chai-jQuery
should(‘to.have.prop’, ‘…….)
should('to.have.class', 'label')
expect(label).to.have.class('label')
.submit() - used only for FORM
*Automatically create a folder called screenshot my project
cy.screenshot('before-submit-the-form')
cy.screenshot('after-submit-the-form')
prev().screenshot(‘balela’)- go to element before it
before(() => cy.exec(‘rm  -rf folder/screenshot’))- exec use command level from OS, will delete al screenshot
Cy.intercept() - call backend



** file commands inside support folder
- Create commands



CHAI_JQUERY

Chainers	Assertion
attr(name, [value])	expect($el).to.have.attr('foo', 'bar')
prop(name, [value])	expect($el).to.have.prop('disabled', false)
css(name, [value])	expect($el).to.have.css('background-color', 'rgb(0, 0, 0)')
data(name, [value])	expect($el).to.have.data('foo', 'bar')
class(className)	expect($el).to.have.class('foo')
id(id)	expect($el).to.have.id('foo')
html(html)	expect($el).to.have.html('I love testing')
text(text)	expect($el).to.have.text('I love testing')
value(value)	expect($el).to.have.value('test@dev.com')
visible	expect($el).to.be.visible
hidden	expect($el).to.be.hidden
selected	expect($option).not.to.be.selected
checked	expect($input).not.to.be.checked
focus[ed]	expect($input).not.to.be.focused
expect($input).to.have.focus
enabled	expect($input).to.be.enabled
disabled	expect($input).to.be.disabled
empty	expect($el).not.to.be.empty
exist	expect($nonexistent).not.to.exist
match(selector)	expect($emptyEl).to.match(':empty')
contain(text)	expect($el).to.contain('text')
descendants(selector)	expect($el).to.have.descendants('div')

BDD Assertentions:
not	expect(name).to.not.equal('Jane')
deep	expect(obj).to.deep.equal({ name: 'Jane' })
nested	expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]')
expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'})
ordered	expect([1, 2]).to.have.ordered.members([1, 2]).but.not.have.ordered.members([2, 1])
any	expect(arr).to.have.any.keys('age')
all	expect(arr).to.have.all.keys('name', 'age')
a(type)
Aliases: an	expect('test').to.be.a('string')
include(value)
Aliases: contain, includes, contains	expect([1,2,3]).to.include(2)
ok	expect(undefined).to.not.be.ok
true	expect(true).to.be.true
false	expect(false).to.be.false
null	expect(null).to.be.null
undefined	expect(undefined).to.be.undefined
exist	expect(myVar).to.exist
empty	expect([]).to.be.empty
arguments
Aliases: Arguments	expect(arguments).to.be.arguments
equal(value)
Aliases: equals, eq	expect(42).to.equal(42)
deep.equal(value)	expect({ name: 'Jane' }).to.deep.equal({ name: 'Jane' })
eql(value)
Aliases: eqls	expect({ name: 'Jane' }).to.eql({ name: 'Jane' })
greaterThan(value)
Aliases: gt, above	expect(10).to.be.greaterThan(5)
least(value)
Aliases: gte	expect(10).to.be.at.least(10)
lessThan(value)
Aliases: lt, below	expect(5).to.be.lessThan(10)
most(value)
Aliases: lte	expect('test').to.have.length.of.at.most(4)
within(start, finish)	expect(7).to.be.within(5,10)
instanceOf(constructor)
Aliases: instanceof	expect([1, 2, 3]).to.be.instanceOf(Array)
property(name, [value])	expect(obj).to.have.property('name')
deep.property(name, [value])	expect(deepObj).to.have.deep.property('tests[1]', 'e2e')
ownProperty(name)
Aliases: haveOwnProperty, own.property	expect('test').to.have.ownProperty('length')
ownPropertyDescriptor(name)
Aliases: haveOwnPropertyDescriptor	expect({a: 1}).to.have.ownPropertyDescriptor('a')
lengthOf(value)	expect('test').to.have.lengthOf(3)
match(RegExp)
Aliases: matches	expect('testing').to.match(/^test/)
string(string)	expect('testing').to.have.string('test')
keys(key1, [key2], [...])
Aliases: key	expect({ pass: 1, fail: 2 }).to.have.keys('pass', 'fail')
throw(constructor)
Aliases: throws, Throw	expect(fn).to.throw(Error)
respondTo(method)
Aliases: respondsTo	expect(obj).to.respondTo('getName')
itself	expect(Foo).itself.to.respondTo('bar')
satisfy(method)
Aliases: satisfies	expect(1).to.satisfy((num) => { return num > 0 })
closeTo(expected, delta)
Aliases: approximately	expect(1.5).to.be.closeTo(1, 0.5)
members(set)	expect([1, 2, 3]).to.include.members([3, 2])
oneOf(values)	expect(2).to.be.oneOf([1,2,3])
change(function)
Aliases: changes	expect(fn).to.change(obj, 'val')
increase(function)
Aliases: increases	expect(fn).to.increase(obj, 'val')
decrease(function)
Aliases: decreases	expect(fn).to.decrease(obj, 'val')


TDD ASSERTETION:

Assertion	Example
.isOk(object, [message])	assert.isOk('everything', 'everything is ok')
.isNotOk(object, [message])	assert.isNotOk(false, 'this will pass')
.equal(actual, expected, [message])	assert.equal(3, 3, 'vals equal')
.notEqual(actual, expected, [message])	assert.notEqual(3, 4, 'vals not equal')
.strictEqual(actual, expected, [message])	assert.strictEqual(true, true, 'bools strict eq')
.notStrictEqual(actual, expected, [message])	assert.notStrictEqual(5, '5', 'not strict eq')
.deepEqual(actual, expected, [message])	assert.deepEqual({ id: '1' }, { id: '1' })
.notDeepEqual(actual, expected, [message])	assert.notDeepEqual({ id: '1' }, { id: '2' })
.isAbove(valueToCheck, valueToBeAbove, [message])	assert.isAbove(6, 1, '6 greater than 1')
.isAtLeast(valueToCheck, valueToBeAtLeast, [message])	assert.isAtLeast(5, 2, '5 gt or eq to 2')
.isBelow(valueToCheck, valueToBeBelow, [message])	assert.isBelow(3, 6, '3 strict lt 6')
.isAtMost(valueToCheck, valueToBeAtMost, [message])	assert.isAtMost(4, 4, '4 lt or eq to 4')
.isTrue(value, [message])	assert.isTrue(true, 'this val is true')
.isNotTrue(value, [message])	assert.isNotTrue('tests are no fun', 'val not true')
.isFalse(value, [message])	assert.isFalse(false, 'val is false')
.isNotFalse(value, [message])	assert.isNotFalse('tests are fun', 'val not false')
.isNull(value, [message])	assert.isNull(err, 'there was no error')
.isNotNull(value, [message])	assert.isNotNull('hello', 'is not null')
.isNaN(value, [message])	assert.isNaN(NaN, 'NaN is NaN')
.isNotNaN(value, [message])	assert.isNotNaN(5, '5 is not NaN')
.exists(value, [message])	assert.exists(5, '5 is not null or undefined')
.notExists(value, [message])	assert.notExists(null, 'val is null or undefined')
.isUndefined(value, [message])	assert.isUndefined(undefined, 'val is undefined')
.isDefined(value, [message])	assert.isDefined('hello', 'val has been defined')
.isFunction(value, [message])	assert.isFunction(x => x * x, 'val is func')
.isNotFunction(value, [message])	assert.isNotFunction(5, 'val not funct')
.isObject(value, [message])	assert.isObject({num: 5}, 'val is object')
.isNotObject(value, [message])	assert.isNotObject(3, 'val not object')
.isArray(value, [message])	assert.isArray(['unit', 'e2e'], 'val is array')
.isNotArray(value, [message])	assert.isNotArray('e2e', 'val not array')
.isString(value, [message])	assert.isString('e2e', 'val is string')
.isNotString(value, [message])	assert.isNotString(2, 'val not string')
.isNumber(value, [message])	assert.isNumber(2, 'val is number')
.isNotNumber(value, [message])	assert.isNotNumber('e2e', 'val not number')
.isFinite(value, [message])	assert.isFinite('e2e', 'val is finite')
.isBoolean(value, [message])	assert.isBoolean(true, 'val is bool')
.isNotBoolean(value, [message])	assert.isNotBoolean('true', 'val not bool')
.typeOf(value, name, [message])	assert.typeOf('e2e', 'string', 'val is string')
.notTypeOf(value, name, [message])	assert.notTypeOf('e2e', 'number', 'val not number')



Kind of assertions/expects
https://docs.cypress.io/guides/references/assertions#BDD-Assertions

*Using parents and find:
Ex. travel through the form
Look for form block and travel through them, select the parents and will find, email, password and sign in

Quando se tem um calendário dar f12 e ir em properties: value

## API (Application Programming Interface - black box)

***Types:

* get - request specific data from API
*  post and put - send data to a API to create/update a resource
*  delete - remove specified resource

****Typical API request

* API URL - http link to API. Usually called API End-point

* HEADERS - usually it’s content-type or authorization token

* TYPE - get, post, put, delete

* BODY - JSON object with request data

Cypress has built in server which can intercept browser API requests and provide mock response
Cypress can makeAPI requests and process responses

F12 go to network and filter ALL, HXR and ø to clear and refresh
click user, HEADERS, get requests

Create serve cypress: cy.server()
Route: cy.route('POST', '**/articles').as('postArticles')
The end: cy.wait('@postArticles')

cy.get('@postArticles').then( xhr => {
            console.log(xhr)
        })


After test, to do a conference and give a inspect on your test page.
Open your console.log and find XMLHttpResquest.
There you find:
request is what is your browser send to backend server
response is what we got back
Always create expect like that:
cy.get('@postArticles').then( xhr => {
            console.log(xhr)
            expect(xhr.status).to.equal(200)
            expect(xhr.request.body.article.body).to.equal('This is a body of the Article')
            expect(xhr.response.body.article.description).to.equal('This is a description')
        })

intercept browser request and how to provide mock or stop

Go to tags and copy the response put into json file, go to fixtures - tags.json and paste the response
We modify the Json file, because that we want to make the routing before we log into our application
Need create cy.server on beforeEach: and also put locate json file 
Like that:
beforeEach('Login to the app', () => {
        cy.server()
        cy.route('GET', '**/tags', 'fixture:tags.json')
        cy.loginToApplication()
    })

CREATE TEST FROM POSTMAN

 to delete article, we need create one, published and open xhr article the from network
    we'll use postman to repeat steps, because it is good to APIs
    go to postman and select POST, copy the url that I did the article
    into the XHR go to headers request(indo request headers), look for content-type
    now go to postman and click on headers and copy content-type
    below the key: Content-type and below the value: application/json
    on headers above content-type look at the authorisation and requires the token
    now return to postman on key: Authorisation and value: Token blablablabla
    now on postman click on body and go to our body request(request Payload and click on view source)
    copy this body request go to postman click on row and paste 
    after click on Beautify button, and show the body request 
    now on postman we'll modify: title, description and body 
        {
            "article": {
                "tagList": [],
                "title": "Request from API",
                "description": "API testing is easy ",
                "body": "Angular is cool"
            }
        }
    now click on send on postman
    after click scroll down, verify the status 200 OK
    now let go our application and we have to see this application in IU the on global feed 

    now we requires authorisation with big token, this token came from we login into the application
    we will need another one more step to make another API call to give this token
    how to get this token?
    go in our application and delete
    log out de appl. and clear the network and sign in again
    check network  XHR login, check headers request payload user and click on response and got the token value
    lets repeat these steps on postman too, go to postman click + and will open a new tab
    POST , go to headers and get URL and copy and paste on postman
    in postman click on headers got (content-type: application/json), and go to body and click row
    lets copy body our browser(request payload view source{user: {"email": "carolzitafarmaceutica@gmail.com", "password": "xxxxxxxxxxxx"}})
    click beautify and click send
    the response and scroll down and find token and copy without quotes
    paste to value authorisation and click send and see de 200 response
    go back to our feed and we have our test data

    ***Headless authorization

In localhost, check whats going on. Lets sing out and sign in again.
Go to network and verify the api request and verify the response on the token 
Now, we see what happen with this token.
Go to application tab, next network and click
Go to store and click on ‘Local Storage’ and click on arrow down and will appear:
Localhost:4200 and above and right side will appear key and value and above the a yellow token.
To make our headless authentication, we need to make an API request to get this token and then
Save this token onto the browser local storage. After that the browser can perform any action as authenticated user.
how we have a method on (support)command to login, now I will modify de Cypress.Command.add to make a headless authetication.
Need to use request and use url login and token.(cy.request())

Cypress.Commands.add('loginToApplication', () =>{
    //headless authorization
    const userCresentials = {
        "user": {
            "email": "carolzitafarmaceutica@gmail.com",
            "password": “XXXXXXXXXX”
        }
    }

    cy.request('POST', 'https://conduit.productionready.io/api/users/login', userCresentials)
        .its('body').then(body => {
            const token = body.user.token
            //go to home page, because assume we already authenticate it and need provide option
            //to our visit that log before event. use window object and window., want local storage, set item, item name is jwtToken and value token

            cy.visit('/', {
                onBeforeLoad (win){
                    win.localStorage.setItem('jwtToken', token)
                }
            })
        })


In this case don’t need have to enter with username and password every time, the authentication happening heedlessly and the test run is much quicker that before .
Because I already use getting the token in previous test where I use this request, and probably 
Don’t need make this request again because I already have this token.
Its better save this token into the cypress alias (@) and I’ll use this token inside of the apllication
Lets do it below:
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

In my test I’ll refacture the request 
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
                url: 'https://conduit.productionready.io/api/articles/',
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
                url:'https://conduit.productionready.io/api/articles?limit=10&offset=0',
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





********************************************************************************

[![RealWorld Frontend](https://img.shields.io/badge/realworld-frontend-%23783578.svg)](http://realworld.io)
[![Build Status](https://travis-ci.org/gothinkster/angular-realworld-example-app.svg?branch=master)](https://travis-ci.org/gothinkster/angular-realworld-example-app)

# ![Angular Example App](logo.png)

> ### Angular codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) spec and API.


<a href="https://stackblitz.com/edit/angular-realworld" target="_blank"><img width="187" src="https://github.com/gothinkster/realworld/blob/master/media/edit_on_blitz.png?raw=true" /></a>&nbsp;&nbsp;<a href="https://thinkster.io/tutorials/building-real-world-angular-2-apps" target="_blank"><img width="384" src="https://raw.githubusercontent.com/gothinkster/realworld/master/media/learn-btn-hr.png" /></a>

### [Demo](https://angular.realworld.io)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)



This codebase was created to demonstrate a fully fledged application built with Angular that interacts with an actual backend server including CRUD operations, authentication, routing, pagination, and more. We've gone to great lengths to adhere to the [Angular Styleguide](https://angular.io/styleguide) & best practices.

Additionally, there is an Angular 1.5 version of this codebase that you can [fork](https://github.com/gothinkster/angularjs-realworld-example-app) and/or [learn how to recreate](https://thinkster.io/angularjs-es6-tutorial).


# How it works

We're currently working on some docs for the codebase (explaining where functionality is located, how it works, etc) but the codebase should be straightforward to follow as is. We've also released a [step-by-step tutorial w/ screencasts](https://thinkster.io/tutorials/building-real-world-angular-2-apps) that teaches you how to recreate the codebase from scratch.

### Making requests to the backend API

For convenience, we have a live API server running at https://conduit.productionready.io/api for the application to make requests against. You can view [the API spec here](https://github.com/GoThinkster/productionready/blob/master/api) which contains all routes & responses for the server.

The source code for the backend server (available for Node, Rails and Django) can be found in the [main RealWorld repo](https://github.com/gothinkster/realworld).

If you want to change the API URL to a local server, simply edit `src/environments/environment.ts` and change `api_url` to the local server's URL (i.e. `localhost:3000/api`)


# Getting started

Make sure you have the [Angular CLI](https://github.com/angular/angular-cli#installation) installed globally. We use [Yarn](https://yarnpkg.com) to manage the dependencies, so we strongly recommend you to use it. you can install it from [Here](https://yarnpkg.com/en/docs/install), then run `yarn install` to resolve all dependencies (might take a minute).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Building the project
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Functionality overview

The example application is a social blogging site (i.e. a Medium.com clone) called "Conduit". It uses a custom API for all requests, including authentication. You can view a live demo over at https://angular.realworld.io

**General functionality:**

- Authenticate users via JWT (login/signup pages + logout button on settings page)
- CRU* users (sign up & settings page - no deleting required)
- CRUD Articles
- CR*D Comments on articles (no updating required)
- GET and display paginated lists of articles
- Favorite articles
- Follow other users

**The general page breakdown looks like this:**

- Home page (URL: /#/ )
    - List of tags
    - List of articles pulled from either Feed, Global, or by Tag
    - Pagination for list of articles
- Sign in/Sign up pages (URL: /#/login, /#/register )
    - Uses JWT (store the token in localStorage)
    - Authentication can be easily switched to session/cookie based
- Settings page (URL: /#/settings )
- Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )
- Article page (URL: /#/article/article-slug-here )
    - Delete article button (only shown to article's author)
    - Render markdown from server client side
    - Comments section at bottom of page
    - Delete comment button (only shown to comment's author)
- Profile page (URL: /#/profile/:username, /#/profile/:username/favorites )
    - Show basic user info
    - List of articles populated from author's created articles or author's favorited articles


<br />

[![Brought to you by Thinkster](https://raw.githubusercontent.com/gothinkster/realworld/master/media/end.png)](https://thinkster.io)
