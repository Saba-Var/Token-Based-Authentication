describe('New password page', () => {
  beforeEach(() => {
    cy.visit('/auth/new-password', {
      qs: { token: 'test-token' },
    })
    cy.get('[data-cy="password-input"]').as('new-password-input')
    cy.get('[data-cy="passwordConfirmation-input"]').as('password-confirmation-input')
    cy.get('[data-cy="reset-password-button"]').as('reset-password-button')
    cy.get('[data-cy="auth-page-title"]').as('auth-page-title')
  })

  it('Should see validation messages when focus and blur inputs. Also validation messages should translate into Georgian', () => {
    cy.get('@new-password-input').focus().blur()
    cy.get("[data-cy='password-validation']").should('contain', 'Password is required')
    cy.get('@password-confirmation-input').focus().blur()
    cy.get("[data-cy='passwordConfirmation-validation']").should(
      'contain',
      'Confirm password is required',
    )
    cy.changeLanguage('ka')
    cy.get("[data-cy='password-validation']").should('contain', 'პაროლი სავალდებულოა')
    cy.get("[data-cy='passwordConfirmation-validation']").should(
      'contain',
      'პაროლის დადასტურება სავალდებულოა',
    )
  })

  it('Should not render auth question', () => {
    cy.get('[data-cy="auth-question"]').should('not.exist')
  })

  it('Should change language after select different language from the language selector', () => {
    cy.changeLanguage('ka')
    cy.get('[data-cy="password-label"]').should('contain', 'ახალი პაროლი')
    cy.get('[data-cy="passwordConfirmation-label"]').should('contain', 'პაროლის დადასტურება')
    cy.get('@auth-page-title').should('contain', 'ახალი პაროლი')
    cy.get('@reset-password-button').should('contain', 'პაროლის შეცვლა')
  })

  it('Should not submit the form if it is invalid', () => {
    cy.get('@reset-password-button').click({
      force: true,
    })
    cy.url().should('include', '/auth/new-password')
    cy.get("[data-cy='password-validation']").should('not.be.visible')
    cy.get("[data-cy='passwordConfirmation-validation']").should('not.be.visible')
  })

  it('Should show success modal password changed successfully', () => {
    cy.newPasswordRequest(200)
    cy.get('@new-password-input').type('newPassword')
    cy.get('@password-confirmation-input').type('newPassword')
    cy.get('@reset-password-button').click({
      force: true,
    })
    cy.get("[data-cy='success-modal']").should('be.visible')
    cy.get("[data-cy='success-modal-title']").should('contain', 'Password changed successfully')
    cy.get('[data-cy="success-modal-description"]').should(
      'contain',
      'Your password has been changed successfully. You can now log in with your new password.',
    )
    cy.get('[data-cy="success-modal-link"]').should('contain', 'Log in')
    cy.get('[data-cy="success-modal-link"]').click()
    cy.url().should('include', '/auth/log-in')
  })

  it('Should see error notification if reset password fail', () => {
    cy.newPasswordRequest(403)
    cy.get('@new-password-input').type('newPassword')
    cy.get('@password-confirmation-input').type('newPassword')
    cy.get('@reset-password-button').click({
      force: true,
    })
    cy.get("[data-cy='success-modal']").should('not.exist')
    cy.url().should('include', '/auth/new-password')
    cy.get('.Toastify__toast-body > :nth-child(2)').should(
      'contain',
      'Reset password failed. Check your url or request password reset link again.',
    )
  })
})
