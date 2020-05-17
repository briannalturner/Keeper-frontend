describe('Login Navlink', function() {
    it('Redirects to Login Page', function() {
        // visit a website
        cy.visit('http://localhost:3001/')

        // click an element on that page
        cy.contains('Login').click()

        // check that link works
        cy.url()
            .should('include', '/login')
    }) 
})

describe('Login Form', function() {
    it('Logs the user in', function() {
        cy.visit('http://localhost:3001/login')

        cy.get('.login-username')
            .type('harry')
            .should('have.value', 'harry')

        cy.get('.login-password')
            .type('hi')
            .should('have.value', 'hi')
        cy.get('.login-button').click()
    })

    it('Redirects to Profile Page', function() {
        cy.url()
            .should('include', '/profile')
    })
})

describe('Profile Page', function() {
    it('Shows the user\'s name', function() {
        cy.contains('Harry Potter')
    })
    it('Shows the user\'s house', function() {
        cy.contains('Gryffindor')
    })
    it('Inbox button redirects to the inbox', function() {
        cy.get('.inbox-button').click()
        
        cy.url()
            .should('include', '/inbox')
    })
    it('MyMatches button redirects to the matches page', function() {
        cy.visit('http://localhost:3001/login')

        cy.get('.login-username')
            .type('harry')
            .should('have.value', 'harry')

        cy.get('.login-password')
            .type('hi')
            .should('have.value', 'hi')
        cy.get('.login-button').click()

        cy.get('.my-matches-button').click()
        
        cy.url()
            .should('include', '/profile/matches')

    })
    it('Edit profile button redirects to the edit profile page', function() {
        cy.visit('http://localhost:3001/login')

        cy.get('.login-username')
            .type('harry')
            .should('have.value', 'harry')

        cy.get('.login-password')
            .type('hi')
            .should('have.value', 'hi')
        cy.get('.login-button').click()

        cy.get('.edit-profile-button').click()
        
        cy.url()
            .should('include', '/profile/edit')
    })
})

describe('Inbox', function() {
    it('Displays user messages', function() {
        cy.visit('http://localhost:3001/login')

        cy.get('.login-username')
            .type('harry')
            .should('have.value', 'harry')

        cy.get('.login-password')
            .type('hi')
            .should('have.value', 'hi')
        cy.get('.login-button').click()

        cy.get('.inbox-button').click()

        cy.get('.card')
    })
    it('Clicking a message card redirects to that conversation', function() {
        cy.visit('http://localhost:3001/login')

        cy.get('.login-username')
            .type('harry')
            .should('have.value', 'harry')

        cy.get('.login-password')
            .type('hi')
            .should('have.value', 'hi')
        cy.get('.login-button').click()

        cy.get('.inbox-button').click()

        cy.get('.card').first().click()

        cy.url()
            .should('include', '/inbox/')
    })
})

describe('Active Conversation Page', function() {
    it('Shows the active conversation', function() {
        cy.visit('http://localhost:3001/login')

        cy.get('.login-username')
            .type('harry')
            .should('have.value', 'harry')

        cy.get('.login-password')
            .type('hi')
            .should('have.value', 'hi')
        cy.get('.login-button').click()

        cy.get('.inbox-button').click()
        
        cy.get('.card').first().click()

        cy.get('.overflow-scroll-chat')
    })
})

describe('Meet Page', function() {
    it('Renders all of the characters in Harry Potter', function() {
        cy.visit('http://localhost:3001/meet')

        cy.contains('Hermione Granger')
    })
    it('Can be filtered by name', function() {
        cy.get('.filter-input')
            .type('Dobby')
            .should('have.value', 'Dobby')
        
        cy.get('Neville Longbottom').should('not.exist')
    })
    it('Cards redirect to user show page', function() {
        cy.get('.card').click()
    })
})

describe('User Show Page', function() {
    it('If no user is logged in it does not show information', function() {
        cy.contains('You must be logged in to view this page.')
    })
    it('If there is a user logged in it shows information', function() {
        cy.visit('http://localhost:3001/login')

        cy.get('.login-username')
            .type('harry')
            .should('have.value', 'harry')

        cy.get('.login-password')
            .type('hi')
            .should('have.value', 'hi')
        cy.get('.login-button').click()

        cy.get('.meet-link').click()

        cy.get('.filter-input')
            .type('Dobby')
            .should('have.value', 'Dobby')

        cy.get('.card').click()

        cy.contains('Dobby')
    })

})