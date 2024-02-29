<h1 align="center">Vite.js app: Powered by Composer 🚀</h1>

## Table of contents

1. [Introduction](#introduction)
2. [Development workflow](#development-workflow)
   - [Running the Application](#running-the-application)
   - [Building](#building)
   - [Testing](#testing)
   - [Linting](#linting)
3. [Usage](#usage)
   - [Environment variables](#environment-variables)
4. [Other services provided](#other-services-provided)

## Introduction

This [vitejs](https://vitejs.dev) application, part of our NX monorepo, is tailored for creating reactjs single page applications using the [Composer](https://cmpsr.io) suite. It leverages the [🎨 Composer Design System](https://www.figma.com/community/file/1117071742977134044/composer-design-system) for a unified aesthetic.

## Development Workflow

Install all the dependencies by executing `npm install` in the workspace's root folder.

### Running the Application

By default when running the app in dev mode we are enabling server response mocking. This behavior can be disabled by commenting/removing the service worker in the [main file](./src/main.tsx). You will also have to define the `VITE_API_URL` environment variable, more details in [here](#environment-variables).

You can run the application by executing:

```bash
npm run start:spa
```

if you need to run the application in production mode use:

```bash
nx serve vite-app --prod
```

### Testing

To execute the test suites, use the following command:

```bash
npm run test:spa
```

### Linting

To perform linting on the project's codebase, run the following command:

```bash
npm run lint:spa
```

## Usage

### Environment variables

You can define environment variables for your project as usual, create an `.env` file in the root folder of the project and define your variables as [recommended by vitejs](https://vitejs.dev/guide/env-and-mode.html):

```bash
VITE_ENV_VAR=value
```

To use the environment variables in your code we provide the [environment service](./src/services/env.service.ts) that verifies that all required environment variables are defined, just fill the `requiredVariables` array with the name of the variables to check.

The service itself can be used like this:

```typescript
import envService from '../env.service';

function SomeService() {
  const envVar = envService.getEnv().VITE_ENV_VAR;

  // Rest of the logic that uses envVar
}

export default SomeService;
```

## Other services provided

- [Auth service](./src/services/auth.service.ts): handles logic to login, logout and user sessions identification
