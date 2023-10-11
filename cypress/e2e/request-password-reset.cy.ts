describe('Request password reset page', () => {
  beforeEach(() => {
    cy.visit('/auth/request-password-reset')
    cy.get('[data-cy="reset-password-request-button"]').as('reset-password-request-button')
    cy.get('[data-cy="auth-question-link"]').as('auth-question-link')
    cy.get('[data-cy="language-selector"]').as('language-selector')
    cy.get('[data-cy="auth-page-title"]').as('auth-page-title')
    cy.get('[data-cy="auth-question"]').as('auth-question')
    cy.get('[data-cy="auth-question"]').as('auth-question')
    cy.get("[data-cy='email-input']").as('email-input')
  })

  it('Should see validation messages when focus and blur email input. Also validation message should translate into Georgian', () => {
    cy.get('@email-input').focus().blur()
    cy.get("[data-cy='email-validation']").should('contain', 'Email is required')
    cy.changeLanguage('ka')
    cy.get("[data-cy='email-validation']").should('contain', 'ელ-ფოსტა სავალდებულოა')
  })

  it('Should render auth question according to the password reset request page', () => {
    cy.get('@auth-question').should('contain', "Don't have an account? Sign up")
  })

  it('Should navigate to sign up form after clicking the auth question link', () => {
    cy.get('@auth-question-link').click()
    cy.url().should('include', '/auth/sign-up')
  })

  it('Should change language after select different language from the language selector', () => {
    cy.changeLanguage('ka')
    cy.get('[data-cy="email-label"]').should('contain', 'ელ-ფოსტა')
    cy.get('@auth-question').should('contain', 'არ გაქვს ანგარიში? რეგისტრაცია')
    cy.get('@auth-page-title').should('contain', 'პაროლის შეცვლა')
    cy.get('[data-cy="auth-form-description"]').should(
      'contain',
      'შეიყვანე შენი ელ-ფოსტა და გამოგიგზავნით პაროლის შესაცვლელ ბმულს',
    )
  })

  it('Should not submit the form if it is invalid', () => {
    cy.get('@reset-password-request-button').click({
      force: true,
    })
    cy.url().should('include', '/auth/request-password-reset')
    cy.get("[data-cy='email-validation']").should('not.be.visible')
  })

  it('Should show success modal if email sent successfully', () => {
    const inputValue = 'correctemail@gmail.com'
    cy.resetPasswordEmailRequest({ statusCode: 200, email: inputValue })
    cy.get('@email-input').type(inputValue)
    cy.get('@reset-password-request-button').click({
      force: true,
    })
    cy.get("[data-cy='success-modal']").should('be.visible')
    cy.get("[data-cy='success-modal-title']").should('contain', 'Password reset link sent')
    cy.get('[data-cy="success-modal-description"]').should(
      'contain',
      'We have sent you an email with a link to change your password. Check your inbox and click on the link to reset password.',
    )
    cy.get('[data-cy="success-modal-link"]').click()
    cy.url().should('not.include', 'auth/request-password-reset')
  })

  it('Should see validation message if user with this email does not exist', () => {
    cy.requestPasswordResetWithError(404)
    cy.get("[data-cy='email-validation']").should('contain', 'User with this email not found')
  })

  it('Should see validation message if account is not activated yet', () => {
    cy.requestPasswordResetWithError(403)
    cy.get("[data-cy='email-validation']").should('contain', 'Account is not activated')
  })
})
