/// <reference types="cypress" />

Cypress.Commands.add('fillSignUpForm', () => {
  cy.get('@username-input').type('test')
  cy.get('@email-input').type('test@gmail.com')
  cy.get('@password-input').type('123456')
  cy.get('@passwordConfirmation-input').type('123456')
})

Cypress.Commands.add('logInRequest', (statusCode) => {
  cy.intercept('POST', `${Cypress.env('CYPRESS_BACKEND_BASE_URI')}/auth/sign-in`, {
    statusCode,
  })
})

Cypress.Commands.add('activationLinkAction', (text, redirectUri) => {
  cy.get('[data-cy="activation-action-link"]').as('activationLink').should('contain', text)
  cy.get('@activationLink').click()
  cy.url().should('contain', redirectUri)
})

Cypress.Commands.add('changeLanguage', (languageLocale: 'en' | 'ka') => {
  cy.get('[data-cy="language-selector"]').click()
  cy.get(`[data-cy="language-option-${languageLocale}"]`).click()
})

Cypress.Commands.add('homeIconNavigation', () => {
  cy.get("[data-cy='home-icon']").click()
  cy.url().should('include', '/')
})

Cypress.Commands.add('signUpDuplicateError', (fieldName) => {
  cy.intercept('POST', `${Cypress.env('CYPRESS_BACKEND_BASE_URI')}/auth/sign-up`, {
    statusCode: 409,
    body: {
      message: `${fieldName} is taken`,
    },
  })
  cy.fillSignUpForm()
  cy.get('@submit-sign-up').click({
    force: true,
  })
  cy.get(`[data-cy='${fieldName}-validation']`).should(
    'contain',
    `${fieldName[0].toUpperCase() + fieldName.slice(1)} is already taken`,
  )
})

Cypress.Commands.add('accountActivationRequest', (statusCode) => {
  const token = 'test'
  cy.intercept(
    'POST',
    `${Cypress.env('CYPRESS_BACKEND_BASE_URI')}/auth/account-activation?token=${token}`,
    {
      statusCode,
    },
  )
  cy.visit({
    url: '/auth/account-activation',
    qs: {
      token,
    },
  })
})

Cypress.Commands.add('resetPasswordEmailRequest', ({ email, statusCode }) => {
  cy.intercept(
    'GET',
    `${Cypress.env('CYPRESS_BACKEND_BASE_URI')}/auth/change-password-email?email=${email}`,
    {
      statusCode,
    },
  )
})

Cypress.Commands.add('requestPasswordResetWithError', (statusCode) => {
  const email = 'test@gmail.com'
  cy.resetPasswordEmailRequest({ statusCode, email })
  cy.get('@email-input').type(email)
  cy.get('@reset-password-request-button').click({
    force: true,
  })
  cy.get("[data-cy='success-modal']").should('not.exist')
})
