// USWDS CSS is loaded via preview-head.html

// Import Relay Design System tokens
import '../src/styles/colors.css';
import '../src/styles/typography.css';
import '../src/styles/spacing.css';
import '../src/styles/border-radius.css';

// Import custom styles
import '../src/styles/custom.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;