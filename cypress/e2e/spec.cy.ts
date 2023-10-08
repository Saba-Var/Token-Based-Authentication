/// <reference types="cypress" />

describe('test', () => {
  it('test', () => {
    cy.visit('/')
    expect(true).to.equal(true)
  })
})
