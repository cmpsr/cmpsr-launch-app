/*
 * Overriding the Theme:
 * If you wish to customize the theme to better align with your brand's visual language,
 * you can leverage the 'Composer themes' Figma plugin. This tool allows you to export your theme as a JSON object.
 *
 * Here's how you can use the plugin:
 * 1. Design your theme in Figma using the [Composer Design System](https://www.figma.com/community/file/1117071742977134044/composer-design-system).
 * 2. Once your design is finalized, use the plugin to export your theme as a JSON file.
 * 3. Replace the default theme object in this file with the JSON content you exported.
 *
 * This process ensures that your brand identity is consistently applied throughout your project,
 * giving you full control over the styling of components.
 *
 * You can find the Composer themes plugin here:
 * [Composer themes Figma plugin](https://www.figma.com/community/plugin/1131606090957780017/composer-themes)
 *
 */

export const theme = {
  breakpoints: {
    base: '0px',
    sm: '414px',
    md: '744px',
    lg: '1080px',
    xl: '1081px',
    xxl: '1440px',
  },
  fonts: {
    body: 'Inter',
    heading: 'Inter',
  },
};
