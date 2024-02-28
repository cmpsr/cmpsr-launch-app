<h1 align="center">Vite.js app: Powered by Composer 🚀</h1>

## Table of contents

1. [Introduction](#introduction)
2. [Development workflow](#development-workflow)
   - [Running the Application](#running-the-application)
   - [Building](#building)
   - [Testing](#testing)
   - [Linting](#linting)

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
