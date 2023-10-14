describe('Log in page', () => {
  beforeEach(() => {
    cy.visit('/auth/log-in')
    cy.get("[data-cy='forget-password-link']").as('forget-password-link')
    cy.get('[data-cy="checkbox-rememberMe"]').as('checkbox-rememberMe')
    cy.get('[data-cy="auth-question-link"]').as('auth-question-link')
    cy.get('[data-cy="language-selector"]').as('language-selector')
    cy.get('[data-cy="auth-page-title"]').as('auth-page-title')
    cy.get("[data-cy='password-input']").as('password-input')
    cy.get("[data-cy='log-in-button']").as('log-in-button')
    cy.get('[data-cy="auth-question"]').as('auth-question')
    cy.get("[data-cy='email-input']").as('email-input')
  })

  it('Should see validation messages when focus and blur inputs. Also validation messages should translate into Georgian', () => {
    cy.get('@email-input').focus().blur()
    cy.get("[data-cy='email-validation']").should('contain', 'Email is required')
    cy.get('@password-input').focus().blur()
    cy.get("[data-cy='password-validation']").should('contain', 'Password is required')
    cy.changeLanguage('ka')
    cy.get("[data-cy='email-validation']").should('contain', 'ელ-ფოსტა სავალდებულოა')
    cy.get("[data-cy='password-validation']").should('contain', 'პაროლი სავალდებულოა')
  })

  it('Should render auth question according to the log in page', () => {
    cy.get('@auth-question').should('contain', "Don't have an account? Sign up")
  })

  it('Should navigate to home page after clicking the home icon', () => {
    cy.homeIconNavigation()
  })

  it('Should navigate to sign up page after clicking the Sign up link in auth question', () => {
    cy.get('@auth-question-link').click()
    cy.url().should('include', '/auth/sign-up')
  })

  it('Should change language after select different language from the language selector', () => {
    cy.changeLanguage('ka')
    cy.get('[data-cy="email-label"]').should('contain', 'ელ-ფოსტა')
    cy.get('[data-cy="password-label"]').should('contain', 'პაროლი')
    cy.get('@log-in-button').should('contain', 'შესვლა')
    cy.get('@auth-question').should('contain', 'არ გაქვს ანგარიში? რეგისტრაცია')
    cy.get('@checkbox-rememberMe').should('contain', 'დამიმახსოვრე')
  })

  it('Should navigate to password reset request page after clicking the forget password link', () => {
    cy.get('@forget-password-link').click()
    cy.url().should('include', '/auth/request-password-reset')
  })

  it('Should not submit the form if it is invalid', () => {
    cy.get('@log-in-button').click({
      force: true,
    })
    cy.url().should('include', '/auth/log-in')
    cy.get("[data-cy='email-validation']").should('not.be.visible')
    cy.get("[data-cy='password-validation']").should('not.be.visible')
  })

  it('Should navigate to profile page if the credentials are correct', () => {
    cy.successfulLogIn()
  })

  it('Should see error message if the credentials are incorrect and also user should stay on the same page', () => {
    const validationMessage = {
      ka: 'პაროლი ან ელ-ფოსტა არასწორია',
      en: 'Password or email is incorrect',
    }
    cy.logInRequest(401)
    cy.get('@email-input').type('incorrect@gmail.com')
    cy.get('@password-input').type('incorrect')
    cy.get('@log-in-button').click({
      force: true,
    })
    cy.url().should('not.include', '/profile')
    cy.get("[data-cy='email-validation']").should('contain', validationMessage.en)
    cy.changeLanguage('ka')
    cy.get("[data-cy='email-validation']").should('contain', validationMessage.ka)
  })
})
