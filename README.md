# Carbon Starter template

Starter template for creating a new [Carbon](https://carbon.sage.com/) app, powered by [Vite](https://vitejs.dev/). Also includes some ESLint rules and a test setup to aid development.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/Parsium/carbon-starter)

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                             |
| :-------------- | :------------------------------------------------- |
| `npm install`   | Installs dependencies                              |
| `npm start`     | Starts local dev server at `localhost:5173`        |
| `npm test`      | Run tests                                          |
| `npm run lint`  | Run linter on project to quick identity any issues |
| `npm run build` | Build your production app to `./dist/`             |

## Test setup

This template uses the [`vitest`](https://vitest.dev/) framework for running tests in a [`jsdom`](https://github.com/jsdom/jsdom) environment, with [`istanbul`](https://istanbul.js.org/) for measuring code coverage.

> If you are unfamiliar with `vitest`, the framework shares many similarities with `jest`, making it easier to get started.

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and its sister libraries, [`user-event`](https://testing-library.com/docs/user-event/intro) and [`jest-dom`](https://github.com/testing-library/jest-dom), are also included.

A sample test file `App.spec.tsx` has been included for you.

If you require any global setup to be triggered once before all tests are run, the `setup-tests.ts` file has been provided.
