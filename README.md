# Next.js & Contentful: Powered by Composer 🚀

Harness the power of [Contentful](https://www.contentful.com/) with our specialized Next.js framework, designed to streamline the development of content-rich pages. Utilize the comprehensive tools provided by the [Composer](https://cmpsr.io/) suite for crafting custom MDX and components. This setup brings the seamless integration of the [🎨 Composer Design System](https://www.figma.com/community/file/1117071742977134044/composer-design-system), ensuring a unified and elegant visual language.

## Development Setup

To prepare your local development environment for this project, follow the steps outlined below. Begin by confirming that your system meets the necessary prerequisites, then proceed with the project setup.

### Prerequisites

Before diving into the project setup, ensure that your system is equipped with the following:

- **Node.js**: Version `>=18.17.0` or greater is required. You can download and install it from the [Node.js website](https://nodejs.org/).

- **Yarn**: This project uses Yarn as its package manager. Make sure Yarn is installed on your system to manage the project's dependencies. For installation instructions, visit the [Yarn website](https://yarnpkg.com/).

With these prerequisites in place, you can proceed to the project setup.

### Initial Project Setup

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
   yarn install
   ```

### Environment Configuration

Configure the necessary environment variables post initial setup to communicate with services like Contentful and Redis:

1. **Create an Environment File**: Make a new `.env` file at the project's root.

2. **Set the Environment Variables**: Input the required variables in the `.env` file.

```plaintext
# Contentful configuration
CONTENTFUL_SPACE_ID=<your_space_id> # Unique identifier for your Contentful space
CONTENTFUL_ENVIRONMENT=<your_environment> # Environment in Contentful, e.g., 'master', 'development'
CONTENTFUL_ACCESS_TOKEN_DELIVERY=<your_delivery_access_token> # Access token for reading published content
CONTENTFUL_ACCESS_TOKEN_PREVIEW=<your_preview_access_token> # Access token for reading draft content
CONTENTFUL_PREVIEW=<true_or_false> # Flag to toggle preview mode, useful for fetching draft content from Contentful

# Site configuration
SITE_DOMAIN=<your_site_domain> # The domain name of your site, e.g., 'intelihealth' or 'evolveme'. This is key for routing and content delivery, especially in setups with multiple domains managed under a single Contentful space.

# Redis configuration
REDIS_URL=<your_redis_url> # URL for your Redis instance, used for caching.
```

For obtaining Contentful credentials, consult the [Contentful authentication guide](https://www.contentful.com/developers/docs/references/authentication/).

## Running the Application

After setting up your environment, you can run the application in development or production mode.

### Development Server

To start the development server, which allows for live reloading and other development features, run the following command:

```bash
yarn dev
```

The development server will be available at `http://localhost:3000` by default.

### Production Server

Running the application in production mode involves building the project and then starting the server. This creates optimized builds and starts the server to serve the static files.

1. **Build the application**

```bash
yarn build
```

2. **Start the production server**

```bash
yarn start
```

After running the production server, the application will be running in production mode on your specified port, which is also `3000` by default.

## Custom Components

Our application allows the creation and usage of custom components, which can be utilized within MDX.

### Adding New Components

To add a new component:

1. Create your component file within the `components/` directory.
2. Register your component in the `componentMap` within `components/componentMap.ts` to make it available in MDX.

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
import { ComposerProvider } from "@cmpsr/components";
import { theme } from "../src/theme";

const App = ({ Component, pageProps }) => (
  <>
    // ...
    <ComposerProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ComposerProvider>
  </>
);
```
