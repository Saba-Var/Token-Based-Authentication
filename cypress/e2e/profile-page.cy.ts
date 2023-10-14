describe('Profile page', () => {
  describe('Unauthenticated user', () => {
    it('Should redirect to log in page if user is not authenticated', () => {
      cy.visit('/profile')
      cy.url().should('include', '/auth/log-in')
      cy.go('back')
      cy.url().should('include', '/auth/log-in')
    })

    it('Should not have access to profile page after the log out', () => {
      cy.successfulLogIn()
      cy.get('[data-cy="navbar-log-out"]').click()
      cy.url().should('include', '/')
      cy.go('back')
      cy.url().should('include', '/auth/log-in')
    })
  })

  describe('Authenticated user', () => {
    beforeEach(() => {
      cy.successfulLogIn()
      cy.get("[data-cy='username-input']").as('username-input')
      cy.get('[data-cy="dummyEmail-input"]').as('current-email-input')
      cy.get('[data-cy="username-change-btn"]').as('username-change-btn')
      cy.get('[data-cy="dummyEmail-change-btn"]').as('email-change-btn')
    })

    it('Should see content of the profile page according to the test user data', () => {
      cy.fixture('user').then((user) => {
        cy.get('@username-input').should('have.value', user.username)
        cy.get('@current-email-input').should('have.value', user.email)
      })
    })

    it('Should update username', () => {
      cy.updateUsernameRequest(200)
      cy.get('@username-change-btn').click()
      cy.get('@username-change-btn').should('not.exist')
      cy.fixture('updatedUser').then((updatedUserData) => {
        cy.get('@username-input').clear().type(updatedUserData.username)
        cy.get('[data-cy="save-button"]').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should(
          'contain',
          'Username updated successfully',
        )
        cy.get('@username-input').should('have.value', updatedUserData.username)
      })
      cy.get('@username-change-btn').should('exist')
    })

    it('Should see error message if the username is taken', () => {
      cy.updateUsernameRequest(409)
      cy.get('@username-change-btn').click()
      cy.fixture('updatedUser').then((updatedUserData) => {
        cy.get('@username-input').clear().type(updatedUserData.username)
        cy.get('[data-cy="save-button"]').click()
        cy.contains('Username is already taken')
        cy.get('@username-change-btn').should('not.exist')
        cy.get('[data-cy="cancel-button"]').click()
        cy.get('@username-input').should('not.have.value', updatedUserData.username)
      })
    })

    it('Should request email change link', () => {
      cy.changeEmailRequest(200)
      cy.get('@email-change-btn').click()
      cy.get('@email-change-btn').should('not.exist')
      cy.fixture('updatedUser').then((updatedUserData) => {
        cy.get('[data-cy="email-input"]').type(updatedUserData.email)
        cy.get('[data-cy="save-button"]').click()
        cy.get('[data-cy="success-modal"]').should('exist')
        cy.get('[data-cy="success-modal-title"]').should('contain', 'Email confirmation sent')
        cy.get('[data-cy="success-modal-description"]').should(
          'contain',
          'We have sent a confirmation email to the provided email address. Please check your inbox for further instructions to activate your new email address.',
        )
        cy.get('[data-cy="success-modal-link"]').click()
        cy.url().should('not.include', '/profile')
      })
    })

    it('Should see error message if the email is taken', () => {
      cy.changeEmailRequest(409)
      cy.get('@email-change-btn').click()
      cy.fixture('updatedUser').then((updatedUserData) => {
        cy.get('[data-cy="email-input"]').as('new-email-input')
        cy.get('@new-email-input').type(updatedUserData.email)
        cy.get('[data-cy="save-button"]').click()
        cy.contains('Email is already taken')
        cy.get('@email-change-btn').should('not.exist')
        cy.get('[data-cy="cancel-button"]').click()
        cy.get('@current-email-input').should('not.have.value', updatedUserData.email)
      })
    })

    it('Should be able to update username and email at the same time', () => {
      cy.updateUsernameRequest(200)
      cy.changeEmailRequest(200)
      cy.get('@username-change-btn').click()
      cy.get('@email-change-btn').click()
      cy.fixture('updatedUser').then((updatedUserData) => {
        cy.get('@username-input').clear().type(updatedUserData.username)
        cy.get('[data-cy="email-input"]').type(updatedUserData.email)
        cy.get('[data-cy="save-button"]').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should(
          'contain',
          'Username updated successfully',
        )
        cy.get('@username-input').should('have.value', updatedUserData.username)
        cy.get('[data-cy="success-modal-link"]').click()
        cy.url().should('not.include', '/profile')
      })
    })
  })

  describe('Activate new email', () => {
    beforeEach(() => {
      cy.successfulLogIn()
      cy.get('[data-cy="dummyEmail-input"]').as('current-email-input')
      cy.visit('/profile?emailToken=emailActivationToken')
    })

    it('Should activate new email', () => {
      cy.activateNewEmailRequest(200)
      cy.get('[data-cy="success-modal"]').should('exist')
      cy.get('[data-cy="success-modal-title"]').should('contain', 'Email changed successfully')
    })

    it('Should see error notification if email could not activated', () => {
      cy.activateNewEmailRequest(400)
      cy.get('[data-cy="success-modal"]').should('not.exist')
      cy.get('.Toastify__toast-body > :nth-child(2)').should(
        'contain',
        'Email could not be changed. You can request a new email change link.',
      )
    })
  })
})
