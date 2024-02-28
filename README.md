<h1 align="center">The Composer Starter Template ✨</h1>

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Applications](#applications)
   - [Next.js & Contentful 🚀](#nextjs--contentful-)
   - [Vite-app 🚀](#vite--app-)
   - [Storybook 📚](#storybook-)
4. [Libraries](#libraries)
   - [UI Components 🎨](#ui-components-)
5. [License ](#license)

## Introduction

Welcome to the Composer Starter Template, a streamlined foundation for your web development projects. This template primarily features a Next.js application integrated with Contentful, creating a powerful combination for developing dynamic, content-rich web experiences. It's an ideal starting point for those looking to harness the flexibility of Next.js alongside the robust content management capabilities of Contentful.

## Getting Started

To prepare your local development environment for this project, follow the steps outlined below. Begin by confirming that your system meets the necessary prerequisites, then proceed with the project setup.

### Prerequisites

Before diving into the project setup, ensure that your system is equipped with the following:

- **Node.js**: Version `>=18.17.0` or greater is required. You can download and install it from the [Node.js website](https://nodejs.org/).

- **Npm**: This project uses Npm as its package manager. Make sure Npm is installed on your system to manage the project's dependencies. For installation instructions, visit the [Npm website](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

With these prerequisites in place, you can proceed to the project setup.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/cmpsr/nextjs-contentful-renderer-example-app.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd nextjs-contentful-renderer-example-app
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

## Applications

Our monorepo features several applications, each designed for specific functionality and user experiences.

### Next.js & Contentful 🚀

The Next.js-Contentful application is a central part of this template, offering dynamic, content-rich web experiences. For setup and usage details, see the [Next.js-Contentful README](./apps/nextjs-contentful/README.md).

### Vite-app 🚀

The vite-app is the recommended way to create single page applications. For setup and usage details, see the [Vite-app README](./apps/vite-app/README.md).

### Storybook 📚

Explore and interact with our UI components through our Storybook. This tool helps visualize and test the components in isolation. For more information, see the [Storybook README](./apps/storybook/README.md).

## Libraries

The monorepo also includes libraries that provide shared functionality and components to our applications.

### UI Components 🎨

The UI Library offers a collection of reusable UI components usable across various applications within the monorepo. For guidelines on using and extending this library, visit the [UI Library README](./libs/ui/README.md).

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
