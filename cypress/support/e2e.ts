/* eslint-disable no-unused-vars */
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      activationLinkAction(text: string, redirectUri: string): Chainable<JQuery<HTMLElement>>
      accountActivationRequest(statusCode: number): Chainable<JQuery<HTMLElement>>
      changeLanguage(languageLocale: 'en' | 'ka'): Chainable<JQuery<HTMLElement>>
      signUpDuplicateError(fieldName: string): Chainable<JQuery<HTMLElement>>
      logInRequest(statusCode: number): Chainable<JQuery<HTMLElement>>
      fillSignUpForm(): Chainable<JQuery<HTMLElement>>
    }
  }
}
