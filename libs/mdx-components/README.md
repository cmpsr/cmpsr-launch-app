# MDX Components Library 🎨

The MDX Components Library is a specialized package within our NX monorepo, designed for crafting and managing custom MDX components. It serves as a central repository for all MDX-related UI elements, facilitating their reuse across the `nextjs-contentful` application and ensuring a consistent and dynamic content rendering experience.

## Adding New Components

1. **Generate Component**: Use NX to scaffold a new component in `mdx-components`, replace the `{component_name}` with your desired component name:

   ```
   nx g @nx/react:component libs/mdx-components/src/lib/{component_name}
   ```

2. **Develop Component**: Customize the new component in its generated folder.

3. **Update mdxComponentMap**: Add your component to the `mdxComponentMap` in `libs/mdx-components/src/lib/mdxComponentMap.ts`. This step is crucial to ensure your component is available for rendering in MDX.

## Integration in nextjs-contentful

The `MdxRenderer` in `nextjs-contentful` automatically detects and uses components exported from `mdx-components`. Simply use your new component in MDX files as a regular JSX tag.

Example Usage in MDX:

```
# My MDX Content

<MyNewComponent prop="value" />
```

## Test

To execute the test suites, use the following command:

```bash
npm run test
```

## Lint

To perform linting on the project's codebase, run the following command:

```bash
npm run lint
```
