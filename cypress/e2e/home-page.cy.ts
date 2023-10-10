/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get("[data-cy='description']").as('description')
    cy.get("[data-cy='title']").as('title')
    cy.get("[data-cy='get-started']").as('get-started')
    cy.get("[data-cy='learn-more']").as('learn-more')
    cy.get("[data-cy='navbar-log-in']").as('navbar-log-in')
    cy.get("[data-cy='navbar-sign-up']").as('navbar-sign-up')
    cy.get("[data-cy='language-selector']").as('language-selector')
  })

  it('Should see English as a default language when visiting for the first time', () => {
    cy.get('@title').should('contain', 'Token-based Authentication')
    cy.get('@description').should(
      'contain',
      'A Refresh Token is a special kind of token that can be used to obtain a new renewed access token which allows access to the protected resources. You can request for the new access tokens by using the Refresh Token in Web API until the Refresh Token is valid.',
    )
    cy.get('@get-started').should('contain', 'Get started')
    cy.get('@learn-more').should('contain', 'Learn more')
    cy.get("[data-cy='token-auth-flow-en']").should('be.visible')
    cy.get("[data-cy='selected-language']").should('contain', 'English')
    cy.get("[data-cy='selected-language-flag-en']").should('be.visible')
  })

  it("Should open new tab when clicking on 'Learn more'", () => {
    cy.get('@learn-more').should('have.attr', 'target', '_blank')
  })

  it("Should redirect to sign up page when clicking on 'Get started'", () => {
    cy.get('@get-started').click()
    cy.url().should('include', '/auth/sign-up')
  })

  it("Should redirect to sign up page when clicking on 'Sign up' on the navbar", () => {
    cy.get('@navbar-sign-up').click()
    cy.url().should('include', '/auth/sign-up')
  })

  it("Should redirect to log in page when clicking on 'Log in' on the navbar", () => {
    cy.get('@navbar-log-in').click()
    cy.url().should('include', '/auth/log-in')
  })

  it('Should redirect to home page when click on the home icon', () => {
    cy.get('@navbar-log-in').click()
    cy.get("[data-cy='home-icon']").click()
    cy.url().should('include', '/')
    cy.get('@title').should('contain', 'Token-based Authentication')
  })

  it("Should change language to Georgian when clicking on 'ქართული' on the language selector", () => {
    cy.get('@language-selector').click()
    cy.get("[data-cy='language-option-ka']").click()
    cy.get("[data-cy='selected-language-flag-ka']").should('be.visible')
    cy.get("[data-cy='selected-language']").should('contain', 'ქართული')
    cy.get('@title').should('contain', 'ტოკენზე დაფუძნებული ავთენტიფიკაცია')
    cy.get('@description').should(
      'contain',
      'refresh token არის სპეციალური ტოკენი, რომელიც შეიძლება გამოყენებულ იქნას , რომ მოიპოვო განახლებული წვდომა დაცულ რესურსებზე. შენ შეგიძლია მოითხოვო ახალი access token, refresh token-ს გამოყენებით Web API-დან, სანამ refresh token იქნება ვალიდური.',
    )
    cy.get('@get-started').should('contain', 'დაწყება')
    cy.get('@learn-more').should('contain', 'გაიგეთ მეტი')
  })

  it('Should persist language when refreshing the page', () => {
    cy.get('@language-selector').click()
    cy.get("[data-cy='language-option-ka']").click()
    cy.reload()
    cy.get("[data-cy='selected-language-flag-ka']").should('be.visible')
  })
})
