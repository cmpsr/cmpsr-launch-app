<h1 align="center">Storybook Library for UI Components 📚</h1>

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Installation](#installation)
3. [Development Workflow](#development-workflow)
   - [Running Storybook](#running-storybook)
   - [Building](#building)

## Introduction

Welcome to our Storybook Library, the visual playground for our UI components. This Storybook setup serves as a dynamic environment for developing and showcasing the components used across various applications within our NX monorepo. It's an essential tool for visualizing component behavior and ensuring design consistency.

## Getting Started

### Installation

Since Storybook is integrated into our monorepo, no separate installation is required. Ensure that your monorepo dependencies are up to date.

## Development Workflow

### Running Storybook

To launch the Storybook interface and explore our component library, execute:

```bash
npm run start:sb
```

This command will start the Storybook server, making the interface available at `http://localhost:4400` in your default web browser.

### Building

To create a production build of your Storybook library, which compiles all the stories and components into optimized, static files, run the following command:

```bash
npm run build:sb
```
