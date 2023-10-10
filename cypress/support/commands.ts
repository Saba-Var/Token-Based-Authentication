/// <reference types="cypress" />

Cypress.Commands.add('fillSignUpForm', () => {
  cy.get('@username-input').type('test')
  cy.get('@email-input').type('test@gmail.com')
  cy.get('@password-input').type('123456')
  cy.get('@passwordConfirmation-input').type('123456')
})

Cypress.Commands.add('signUpDuplicateError', (fieldName: string) => {
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

Cypress.Commands.add('accountActivationRequest', ({ statusCode, token = '' }) => {
  cy.intercept(
    'POST',
    `${Cypress.env('CYPRESS_BACKEND_BASE_URI')}/auth/account-activation${
      token && `?token=${token}`
    }`,
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

Cypress.Commands.add('activationLinkAction', (text, redirectUri) => {
  cy.get('[data-cy="activation-action-link"]').as('activationLink').should('contain', text)
  cy.get('@activationLink').click()
  cy.url().should('contain', redirectUri)
})
