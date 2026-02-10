import { Button } from './Button';

/**
 * Button component synced from Figma
 * 
 * Design specifications:
 * - Pill-shaped with 40px border radius
 * - Uses Relay Design System color tokens
 * - Primary variant: --Brand-Purple-Base (#333366)
 * - Secondary variant: --Brand-Blue-Base (#004B87)
 * - Outline variant: --Brand-Purple-Base border
 * 
 * See FIGMA_WORKFLOW.md for token mapping details
 */
export default {
  title: 'Relay Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Button variant (maps to Figma design tokens)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
  },
};

/**
 * Primary button - Uses --Brand-Purple-Base token from Figma
 */
export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

/**
 * Secondary button - Uses --Brand-Blue-Base token from Figma
 */
export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

/**
 * Outline button - Uses --Brand-Purple-Base for border
 */
export const Outline = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

/**
 * Small size variant
 */
export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button',
  },
};

/**
 * Large size variant
 */
export const Large = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button',
  },
};

/**
 * Disabled state
 */
export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

/**
 * All variants together - shows how Figma tokens map to button styles
 */
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

/**
 * All sizes together
 */
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="medium">Medium</Button>
      <Button variant="primary" size="large">Large</Button>
    </div>
  ),
};
