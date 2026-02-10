# Relay Design System

A customizable React design system based on the U.S. Web Design System (USWDS).

## Overview

This project uses USWDS as a foundation and allows you to build upon and customize it for your needs. Components are built in React and documented in Storybook.

## Getting Started

### Install dependencies
```bash
npm install
```

### Run Storybook
```bash
npm run storybook
```

### Run the dev server
```bash
npm run dev
```

## Project Structure

```
relay/
├── src/
│   ├── components/          # React components based on USWDS
│   │   ├── Button/
│   │   │   ├── Button.jsx        # Component implementation
│   │   │   ├── Button.scss       # Component styles (USWDS + custom)
│   │   │   ├── Button.stories.jsx # Storybook stories
│   │   │   └── index.js          # Component exports
│   │   └── index.js         # All component exports
│   └── styles/              # Global styles
│       ├── uswds.scss       # USWDS configuration
│       └── theme.scss       # Custom theme settings
├── .storybook/              # Storybook configuration
└── package.json
```

## Creating New Components

1. Create a new folder in `src/components/` for your component
2. Add the component file (e.g., `Alert.jsx`)
3. Add styles (e.g., `Alert.scss`) - use USWDS classes as base
4. Create Storybook stories (e.g., `Alert.stories.jsx`)
5. Export from `src/components/index.js`

Example component structure:
```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './YourComponent.scss';

export const YourComponent = ({ ...props }) => {
  return (
    <div className="usa-component-name">
      {/* Use USWDS classes and add your enhancements */}
    </div>
  );
};
```

## Customizing USWDS

### Theme Settings
Edit `src/styles/theme.scss` to override USWDS default variables:
```scss
$theme-color-primary: "blue-60v";
$theme-color-secondary: "red-50v";
```

### Component Styles
Each component has its own SCSS file where you can:
- Use USWDS utility classes
- Add custom styles
- Override USWDS component styles

### Global Styles
Edit `src/styles/uswds.scss` to add global style customizations.

## USWDS Reference

- [USWDS Documentation](https://designsystem.digital.gov/)
- [USWDS Components](https://designsystem.digital.gov/components/)
- [USWDS Utilities](https://designsystem.digital.gov/utilities/)

## Publishing Updates

Your Storybook serves as your design system documentation. You can:

1. **Deploy Storybook** to view your design system online
2. **Publish as an npm package** to use in other projects
3. **Share stories** with your team for review and feedback

### Deploy Storybook
```bash
npm run build-storybook
# Deploy the storybook-static folder to your hosting service
```

## Next Steps

- [ ] Add more components (Alert, Card, Header, etc.)
- [ ] Customize the USWDS theme to match your brand
- [ ] Set up Chromatic for visual regression testing
- [ ] Configure npm publishing for your design system package
- [ ] Integrate with your React application
