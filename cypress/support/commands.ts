/// <reference types="cypress" />
/// <reference types="cypress" />

export const BACKEND_BASE_URI = 'https://token-based-authentication-api.vercel.app'

Cypress.Commands.add('fillSignUpForm', () => {
  cy.get('@username-input').type('test')
  cy.get('@email-input').type('test@gmail.com')
  cy.get('@password-input').type('123456')
  cy.get('@passwordConfirmation-input').type('123456')
})

Cypress.Commands.add('signUpDuplicateError', (fieldName: string) => {
  cy.intercept('POST', `${BACKEND_BASE_URI}/auth/sign-up`, {
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
