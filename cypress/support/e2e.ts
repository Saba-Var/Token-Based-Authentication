/* eslint-disable no-unused-vars */
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      activationLinkAction(text: string, redirectUri: string): Chainable<JQuery<HTMLElement>>

      requestPasswordResetWithError(statusCode: number): Chainable<JQuery<HTMLElement>>

      accountActivationRequest(statusCode: number): Chainable<JQuery<HTMLElement>>

      changeLanguage(languageLocale: 'en' | 'ka'): Chainable<JQuery<HTMLElement>>

      signUpDuplicateError(fieldName: string): Chainable<JQuery<HTMLElement>>

      logInRequest(statusCode: number): Chainable<JQuery<HTMLElement>>

      homeIconNavigation(): Chainable<JQuery<HTMLElement>>

      fillSignUpForm(): Chainable<JQuery<HTMLElement>>

      resetPasswordEmailRequest({
        statusCode,
        email,
      }: {
        statusCode: number
        email: string
      }): Chainable<JQuery<HTMLElement>>
    }
  }
}
