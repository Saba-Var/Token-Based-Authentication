/// <reference types="cypress" />

describe('Sign up page', () => {
  beforeEach(() => {
    cy.visit('/auth/sign-up')
    cy.get("[data-cy='username-input']").as('username-input')
    cy.get("[data-cy='email-input']").as('email-input')
    cy.get("[data-cy='password-input']").as('password-input')
    cy.get("[data-cy='passwordConfirmation-input']").as('passwordConfirmation-input')
    cy.get("[data-cy='submit-sign-up']").as('submit-sign-up')
  })

  it('Should see all necessary fields of sign up form', () => {
    cy.get('@username-input').should('be.visible')
    cy.get('@email-input').should('be.visible')
    cy.get('@password-input').should('be.visible')
    cy.get('@passwordConfirmation-input').should('be.visible')
  })

  it('Should not submit the form if it is invalid', () => {
    cy.get('@submit-sign-up').click({
      force: true,
    })
    cy.url().should('include', '/auth/sign-up')
    cy.get("[data-cy='username-validation']").should('not.be.visible')
  })

  it('Should see validation messages when focus and blur inputs. Also validation messages should translate into Georgian', () => {
    cy.get('@username-input').focus().blur()
    cy.get("[data-cy='username-validation']").should('contain', 'Username is required')
    cy.get('@email-input').focus().blur()
    cy.get("[data-cy='email-validation']").should('contain', 'Email is required')
    cy.get('@password-input').focus().blur()
    cy.get("[data-cy='password-validation']").should('contain', 'Password is required')
    cy.get('@passwordConfirmation-input').focus().blur()
    cy.get("[data-cy='passwordConfirmation-validation']").should(
      'contain',
      'Confirm password is required',
    )
    cy.get('[data-cy="language-selector"]').click()
    cy.get('[data-cy="language-option-ka"]').click()
    cy.get("[data-cy='username-validation']").should('contain', 'სახელი სავალდებულოა')
    cy.get("[data-cy='email-validation']").should('contain', 'ელ-ფოსტა სავალდებულოა')
    cy.get("[data-cy='password-validation']").should('contain', 'პაროლი სავალდებულოა')
    cy.get("[data-cy='passwordConfirmation-validation']").should(
      'contain',
      'პაროლის დადასტურება სავალდებულოა',
    )
  })

  it('Should submit the form if it is valid', () => {
    cy.intercept('POST', `https://token-based-authentication-api.vercel.app/auth/sign-up`, {
      statusCode: 200,
    })
    cy.get('@username-input').type('test')
    cy.get('@email-input').type('test@gmail.com')
    cy.get('@password-input').type('123456')
    cy.get('@passwordConfirmation-input').type('123456')
    cy.get('@submit-sign-up').click({
      force: true,
    })
    cy.get("[data-cy='success-modal']").should('be.visible')
    cy.get("[data-cy='success-modal-link']").click()
    cy.url().should('not.include', '/auth/sign-up')
  })

  it('Should set error to username if username is already taken', () => {
    cy.intercept('POST', `https://token-based-authentication-api.vercel.app/auth/sign-up`, {
      statusCode: 409,
      body: {
        message: `username is taken`,
      },
    })

    cy.get('@username-input').type('test')
    cy.get('@email-input').type('test@gmail.com')
    cy.get('@password-input').type('123456')
    cy.get('@passwordConfirmation-input').type('123456')

    cy.get('@submit-sign-up').click({
      force: true,
    })
    cy.get(`[data-cy='username-validation']`).should('contain', `Username is already taken`)
  })

  it('Should set error to email if email is already taken', () => {
    cy.intercept('POST', `https://token-based-authentication-api.vercel.app/auth/sign-up`, {
      statusCode: 409,
      body: {
        message: `email is taken`,
      },
    })

    cy.get('@username-input').type('test')
    cy.get('@email-input').type('test@gmail.com')
    cy.get('@password-input').type('123456')
    cy.get('@passwordConfirmation-input').type('123456')

    cy.get('@submit-sign-up').click({
      force: true,
    })
    cy.get(`[data-cy='email-validation']`).should('contain', `Email is already taken`)
  })

  it('Should navigate to home page after clicking the home icon', () => {
    cy.get("[data-cy='home-icon']").click()
    cy.url().should('include', '/')
  })

  it('Should have auth question based on the sign up page and redirect to sign in page', () => {
    cy.get("[data-cy='auth-question']").should('contain', 'Already have an account? Log in')
    cy.get("[data-cy='auth-question-link']").click()
    cy.url().should('include', '/auth/sign-in')
  })
})
