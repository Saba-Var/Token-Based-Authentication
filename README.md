<h1>Token Based <span style="color:#1d4ed8">Authentication</span> 🔐</h1>
Token-Based Authentication app offers a secure and efficient way to register and authenticate users. It leverages the power of access and refresh tokens to ensure a seamless user experience and robust security.

## Table of Contents

- [](#)
  - [Prerequisites](#prerequisites)
- [](#-1)
  - [Tech Stack](#tech-stack)
- [](#-2)
  - [Getting Started](#getting-started)
    - [HTTPS:](#https)
    - [SSH:](#ssh)
- [](#-3)
  - [Testing](#testing)
- [](#-4)
  - [Storybook](#storybook)
- [](#-5)
  - [Git rules](#git-rules)
    - [Semantic Commit types](#semantic-commit-types)
    - [Branches](#branches)
- [](#-6)
  - [Setting up Eslint \& Prettier](#setting-up-eslint--prettier)
    - [Visual Studio Code](#visual-studio-code)
    - [WebStorm](#webstorm)
- [](#-7)
  - [Project Structure](#project-structure)
- [](#-8)
  - [Live URIs](#live-uris)

#

## Prerequisites

- <img style="padding-right:10px;" align="left"  src="readme/assets/NodeJs.png"   height="22"/> <p>[Node JS ](https://nodejs.org/en)</p>
- <img style="padding-right:10px;" align="left"  src="readme/assets/Npm.png"   height="20"/> <p>[Node package manager (npm)](https://www.npmjs.com)</p>

#

## Tech Stack

- <img style="padding-right:10px;" align="left"  src="readme/assets/React.png"   height="20"/> [[react @18.2.0]](https://reactjs.org/) - A JavaScript library for building user interfaces

- <img style="padding-right:10px;" align="left"  src="readme/assets/Typescript.png"   height="20"/> [[typescript @5.0.2]](https://www.typescriptlang.org/) - Strongly typed programming language that builds on JavaScript

- <img style="padding-right:10px;" align="left"  src="readme/assets/TailwindLogo.png"   height="15"/> [[tailwindcss @3.3.3]](https://tailwindcss.com/) - Utility-first CSS framework for rapidly building modern websites

- <img style="padding-right:10px;" align="left"  src="readme/assets/Cypress.png"   height="20"/> [[cypress @13.3.0]](https://www.cypress.io/) - E2E testing framework

- <img style="padding-right:10px;" align="left"  src="readme/assets/Vite.png"   height="18"/> [[vite @4.4.5]](https://vitejs.dev/) - Vite is a frontend tool that is used for building fast and optimized web applications

- <img style="padding-right:10px;" align="left"  src="readme/assets/React-Query.png"   height="20"/> [[react-query @4.36.1]](https://tanstack.com/query/v4/docs/overview) - Hooks for fetching, caching and updating asynchronous data in React

- <img style="padding-right:10px;" align="left" src="readme/assets/ReactHookForm.png" height="20"/> [[react-hook-form @7.47.0]](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.

- <img style="padding-right:10px;" align="left"  src="readme/assets/Storybook.png"   height="20"/> [[storybook @7.4.6]](https://storybook.js.org/) - Frontend workshop for building UI components and pages in isolation

- <img style="padding-right:10px;" align="left"  src="readme/assets/Redux.png"   height="18"/> [[@reduxjs/toolkit @1.9.7]](https://redux-toolkit.js.org/introduction/getting-started) - A set of tools that helps simplify Redux development

- <img style="padding-right:10px; padding-top: 5px;" align="left"  src="readme/assets/Axios.png"   height="12"/> [[axios @1.5.1]](https://axios-http.com/) - Promise based HTTP client for the browser and node.js

- <img style="padding-right:10px;" align="left"  src="readme/assets/i18next.png"   height="20"/> [[react-i18next @23.5.1]](https://react.i18next.com/) - Internationalization-framework

- <span style="font-size: 20px;">🐶</span> [[husky @8.0.0]](https://typicode.github.io/husky/) - Tool that allows us to run scripts especially while using version control like git

- <img style="padding-right:10px;" align="left"  src="readme/assets/React-Router.png"   height="20"/> [[react-router @6.16.0]](https://github.com/remix-run/react-router) - Routing library for React

- React-toastify [[react-toastify @9.1.3]](https://fkhadra.github.io/react-toastify/introduction) - React-Toastify allows you to add notifications to your app with ease

- Yup [[yup @1.3.2]](https://www.npmjs.com/package/yup) - Schema builder for runtime value parsing and validation

#

## Getting Started

1\. First of all you need to clone repository from github

#### HTTPS:

```sh
git clone https://github.com/Saba-Var/Token-Based-Authentication.git
```

#### SSH:

```sh
git clone git@github.com:Saba-Var/Token-Based-Authentication.git
```

2\. Navigate to the repository

```sh
cd Token-Based-Authentication
```

3\. Next step requires to install all the dependencies

```sh
npm install
```

4\. copy `.env.example` and create `.env` file.

```sh
cp .env.example .env
```

5\. Run application locally from the terminal:

```sh
npm run dev
```

Open [localhost:3000](http://localhost:3000) to view it in your browser.

#

## Testing

In order to run tests you need start development server with the `npm run dev` command.
After that you can run tests with the one of those options:

1\. Run E2E tests using the Cypress GUI

```sh
npm run cypress:open
```

2\. Run E2E tests in the terminal

```sh
npm run cypress:test
```

#

## Storybook

In order to run Storybook you need to execute the following command in the terminal

```sh
npm run storybook
```

You will be redirected automatically to [localhost:6006](http://localhost:6006/)

#

## Git rules

#### Semantic Commit types

| type     | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| feat     | add new functionality                                                 |
| chore    | minor changes                                                         |
| fix      | fix any bugs                                                          |
| refactor | the code quality has been improved without changing the functionality |
| docs     | improvement/addition of documentation                                 |
| tests    | write new tests or refactor the existing ones                         |
| wip      | working in progress                                                   |

Commit example - `chore: rename test workflow`

```
chore: rename test workflow
┌───── ┌───────────────────
│      │
│      └──> Commit message in present tense.
│
└─────────> Commit type: chore, docs, feat, fix, etc.
```

#### Branches

Branch names are quite the similar to commit types but with different syntax. Example feature branch name `fix/password_change_request_redirect_uri`

```
fix/password_change_request_redirect_uri
┌── ┌───────────────────────────────────
│   │
│   └─────> Feature branch type
│
└─────────> Feature branch type written in camel_case
```

#

## Setting up Eslint & Prettier

#### Visual Studio Code

1\. You need to install following extensions in VS Code [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

#### WebStorm

1\. open settings `Ctrl + comma`

2\. search for Prettier and then select `on save`. Don't forget to choose Prettier package

3\. search for Eslint and make sure it is not disabled

4\. go to Keymap and search Eslint

5\. change the shortcut of FixEslintProblems

#

## Project Structure

```bash
┌─── .github
│     └── workflows
├─── .husky
├─── .storybook
├─── cypress
│    ├── e2e
│    ├── fixtures
│    └── support
├─── public 
│    └── assets
│        └── locales
│            ├── en
│            └── ka
├─── readme
│    └── assets
├─── src
│    ├── assets
│    │   └── images
│    ├── components
│    │   ├── icons
│    │   ├── layout
│    │   ├── shared
│    │   └── storybook
│    ├── config
│    ├── data
│    ├── hooks
│    ├── pages
│    │   ├── 404
│    │   ├── account-activation
│    │   ├── home
│    │   ├── log-in
│    │   ├── new-password
│    │   ├── profile
│    │   ├── request-password-reset
│    │   └── sign-up
│    ├── router
│    ├── services
│    ├── store
│    │   ├── slices
│    │   └── store.ts
│    ├── types
│    ├── utils
│    ├── validation
│    ├── env.d.ts
│    ├── index.css
│    └── main.tsx
│── .env
│── .env.example
│── .eslintrc
│── .gitignore
│── .prettierrc
│── cypress.config.ts
│── i18n.ts
│── index.html
│── package-lock.json
│── package.json
│── postcss.config.js
│── README.md
│── tailwind.config.js
│── tsconfig.json
│── tsconfig.node.json
│── vercel.json
└── vite.config.ts
```

#

## Live URIs

- Production: [token-based-authentication-demo.vercel.app](https://token-based-authentication-demo.vercel.app/)
- Backend API base uri: [token-based-authentication-api.vercel.app](https://token-based-authentication-api.vercel.app)
