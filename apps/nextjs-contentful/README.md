# Next.js & Contentful: Powered by Composer 🚀

This Next.js application, part of our NX monorepo, is tailored for creating content-rich pages using [Contentful](https://www.contentful.com/) and the [Composer](https://cmpsr.io/) suite. It leverages the [🎨 Composer Design System](https://www.figma.com/community/file/1117071742977134044/composer-design-system) for a unified aesthetic.

## Environment Configuration

After initial setup, you'll need to configure environment variables to ensure seamless communication with services like Contentful and Redis.

1. **Navigate to the App Directory**
   Change to the `apps/nextjs-contentful` directory where the environment file will be set up.

   ```bash
   cd apps/nextjs-contentful
   ```

2. **Create and Set Up the Environment File**:
   Copy the `.env.example` file and rename it to `.env`. This file contains template variables that you will need to update.

   ```bash
   cp .env.example .env
   ```

3. **Update Environment Variables**:
   Update the `.env` file with the appropiate values for your setup.

   ```plaintext
   # Contentful configuration
   CONTENTFUL_SPACE_ID=<your_space_id> # Unique identifier for your Contentful space
   CONTENTFUL_ENVIRONMENT=<your_environment> # Environment in Contentful, e.g., 'master', 'development'
   CONTENTFUL_ACCESS_TOKEN_DELIVERY=<your_delivery_access_token> # Access token for reading published content
   CONTENTFUL_ACCESS_TOKEN_PREVIEW=<your_preview_access_token> # Access token for reading draft content
   CONTENTFUL_PREVIEW=<true_or_false> # Flag to toggle preview mode, useful for fetching draft content from Contentful

   # Site configuration
   SITE_DOMAIN=<your_site_domain> # The domain name of your site, e.g., 'composer'. This is key for routing and content delivery, especially in setups with multiple domains managed under a single Contentful space.

   # Redis configuration
   REDIS_URL=<your_redis_url> # URL for your Redis instance, used for caching.
   ```

   For obtaining Contentful credentials, consult the [Contentful authentication guide](https://www.contentful.com/developers/docs/references/authentication/).

## Running the Application

After setting up your environment, you can run the application in development or production mode.

### Development Server

To start the development server, which allows for live reloading and other development features, run the following command:

```bash
npm run start
```

The development server will be available at `http://localhost:4200` by default.

> **Note**
> Should you face a 404 error initially, it's often due to the lack of a homepage in Contentful. Setting up a homepage should fix this issue.

### Build

Running the application in production mode involves building the project and then starting the server. This creates optimized builds and starts the server to serve the static files.

```bash
npm run build
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

## Integrating Custom Components in MDX

Our application allows for the use of custom components within MDX content. This includes components from the `ui` library, this application, or any other library within the monorepo.

### How to Add Custom Components

1. **Import the Component**: Ensure that the desired component is exported from its source library. For example, importing a component from the ui library would look like this:

   ```javascript
   import { ExampleComponent } from '@ui';
   ```

2. **Add to mdxComponentMap**: All components used in MDX must be registered in the `mdxComponentMap` dictionary located at `apps/nextjs-contentful/src/components/mdxComponentMap.ts`. Add your component to this dictionary to make it available in MDX content.

   ```javascript
   // In apps/nextjs-contentful/src/components/mdxComponentMap.ts
   import { CustomComponent } from '@ui';

   const mdxComponentMap = {
     ...existingComponents,
     CustomComponent, // Add your component here
   };
   ```

3. **Usage in MDX**: Once added to the `mdxComponentMap`, the component can be used directly in your MDX.

   ```mdx
   # My MDX Content

   Use your custom component like this:

   <CustomComponent />
   ```

## API Routes

The application includes several API routes to facilitate content management and rendering.

### MDX Generation (`/api/mdx`)

- **Purpose**: Generates MDX from Contentful entries.
- **Caching**: Generated MDX are cached in Redis and served until expiration.

### Content Preview (`/api/preview`)

- **Purpose**: Allows previewing of unpublished content from Contentful.

### Cache Revalidation (`/api/revalidate`)

- **Purpose**: Invalidates the cache for static pages to force regeneration, ensuring that the most current content is served.
- **Recommended Trigger**: For optimal content freshness, we recommend setting up a [webhook in Contentful](https://www.contentful.com/developers/docs/webhooks/overview/) to automatically invoke this route whenever new content is published. Alternatively, you can trigger revalidation manually as required.

Each of these routes are defined within the `pages/api` directory and can be further customized as needed.

## Theme Customization

To align your application with your brand's style, you can customize the theme according to your design specifications. Follow these steps to apply a customized theme using the Composer Design System and Figma.

### Customize Your Theme in Figma

First, use our [Figma Composer Design System](https://www.figma.com/community/file/1117071742977134044/composer-design-system) to customize your design tokens such as colors, fonts, and other styling properties.

### Export Your Custom Theme

Once you have finalized your design in Figma, use the [Composer Themes Plugin](https://www.figma.com/community/plugin/1131606090957780017/composer-themes) to export the theme as a JSON object.

### Apply Your Theme in the Application

After exporting your theme, update the theme object in the `themes/` file with your customized JSON object. Then, make sure to pass this theme object to the `ComposerProvider` in your `_app` file to apply it globally across your application.

Here's an example of how to integrate your customized theme into `_app`:

```javascript
// src/pages/_app.js
import { ComposerProvider } from '@cmpsr/components';
import { theme } from '../src/theme';

const App = ({ Component, pageProps }) => (
  <>
    // ...
    <ComposerProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ComposerProvider>
  </>
);
```
