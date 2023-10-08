/* eslint-disable no-unused-vars */
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      fillSignUpForm(): Chainable<JQuery<HTMLElement>>
      signUpDuplicateError(fieldName: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
