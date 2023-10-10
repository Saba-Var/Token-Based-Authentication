/* eslint-disable no-unused-vars */
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      fillSignUpForm(): Chainable<JQuery<HTMLElement>>
      signUpDuplicateError(fieldName: string): Chainable<JQuery<HTMLElement>>
      accountActivationRequest({
        statusCode,
        token,
      }: {
        statusCode: number
        token?: string
      }): Chainable<JQuery<HTMLElement>>
      activationLinkAction(text: string, redirectUri: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
