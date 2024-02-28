<h1 align="center">Vite.js app: Powered by Composer 🚀</h1>

## Table of contents

1. [Introduction](#introduction)
2. [Development workflow](#development-workflow)
   - [Running the Application](#running-the-application)
   - [Building](#building)
   - [Testing](#testing)
   - [Linting](#linting)
3. [Usage](#usage)

## Introduction

This [vitejs](https://vitejs.dev) application, part of our NX monorepo, is tailored for creating reactjs single page applications using the [Composer](https://cmpsr.io) suite. It leverages the [🎨 Composer Design System](https://www.figma.com/community/file/1117071742977134044/composer-design-system) for a unified aesthetic.

## Development Workflow

Install all the dependencies by executing `npm install` in the workspace's root folder.

### Running the Application

You can run the application by executing:

```bash
npm run start:spa
```

if you need to run the application in production mode use:

```bash
npm run start:spa --omit=dev
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

You can define environment variables for your project as usual, create an `.env` file in the root folder of the project and define your variables as usual:

```bash
ENV_VAR=value
```

To use the environment variables in your code we provide the [environment service](./src/services/env.service.ts) that verifies that all required environment variables are defined, just fill the `requiredVariables` array with the name of the variables to check.

The service itself can be used like this:

```typescript
import envService from '../env.service';

function SomeService() {
  const envVar = envService.getEnv().ENV_VAR;

  // Rest of the logic that uses envVar
}

export default SomeService;
```
