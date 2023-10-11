describe('Account activation page', () => {
  it("Should see fail result if activation token doesn't exist", () => {
    cy.visit('/auth/account-activation')
    cy.get('[data-cy="text-result"]').should(
      'contain',
      'Your account activation failed. Please try again.',
    )
    cy.activationLinkAction('Go back home', '/')
  })

  it('Should see celebration image if the token is valid and account activated successfully', () => {
    cy.accountActivationRequest(200)
    cy.get('[data-cy="text-result"]').should(
      'contain',
      'Congratulations! Your account has been activated. You can now log in.',
    )
    cy.activationLinkAction('Log in', '/auth/sign-in')
  })

  it('Should see team discussing image if the account is already activated', () => {
    cy.accountActivationRequest(409)
    cy.get('[data-cy="text-result"]').should(
      'contain',
      'Your account has already been activated. You can now log in.',
    )
    cy.activationLinkAction('Log in', '/auth/sign-in')
  })

  it('Should see stressed man image if the account activation failed with different status code than 409', () => {
    cy.accountActivationRequest(500)
    cy.get('[data-cy="text-result"]').should(
      'contain',
      'Your account activation failed. Please try again.',
    )
    cy.activationLinkAction('Go back home', '/')
  })

  it('Should see Georgian translation if language is set to ka in local storage', () => {
    localStorage.setItem('language', 'ka')
    cy.accountActivationRequest(200)
    cy.get('[data-cy="text-result"]').should(
      'contain',
      'გილოცავ! შენი ანგარიში წარმატებით გააქტიურდა. ახლა შეგიძლია შეხვიდე აპლიკაციაში.',
    )
    cy.activationLinkAction('შესვლა', '/auth/sign-in')
  })
})
