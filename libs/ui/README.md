# UI Library 🎨

Welcome to the UI library, a comprehensive collection of reusable UI components designed to be leveraged across various applications and libraries within our NX monorepo. This library serves as the cornerstone for building consistent and efficient user interfaces.

## Getting Started

To start using the `ui` components in your project, follow these steps:

## Installation

As the `ui` library is part of the monorepo, no separate installation is required. Ensure that your monorepo dependencies are up to date.

## Usage

1. **Import Components**: You can import the desired components from the `ui` library into your application:
   ```javascript
   import { ExampleComponent } from '@ui';
   ```
2. **Component Implementation**: Utilize these components within your application or library as regular React components:
   ```javascript
   <ExampleComponent />
   ```

## Adding New Components

Creating new components in the `ui` library is a straightforward process that leverages the power of the NX CLI to enhance efficiency and consistency.

Use the NX CLI to scaffold a new component. This command not only creates the component but also automatically adds it to the library's export file. Replace `{component_name}` with your desired component name:

```bash
nx g @nx/react:component libs/ui/src/lib/{component_name}
```

### Test

To execute the test suites, use the following command:

```bash
npm run test
```

### Lint

To perform linting on the project's codebase, run the following command:

```bash
npm run lint
```
