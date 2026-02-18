import { SpacingTokens, BorderRadiusTokens } from './Tokens';

/**
 * Design tokens for spacing and border radius
 * Synced from Figma token definitions
 */
export default {
  title: 'Relay Design System/Tokens',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const Spacing = {
  render: () => <SpacingTokens />,
};

export const BorderRadius = {
  render: () => <BorderRadiusTokens />,
};
