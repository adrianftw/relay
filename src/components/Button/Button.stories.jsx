import { Button } from './Button';

/**
 * Button component synced from Figma
 * 
 * Variants from Figma:
 * - Primary: Purple (--relay-purple-base #333366)
 * - Secondary: Red (--relay-red-base #DA291C)
 * - Accent Cool: Blue (--relay-blue-base #004B87)
 * 
 * Sizes from Figma:
 * - Medium: 20px/12px padding, 16px font
 * - Large: 32px/16px padding, 22px font
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
      options: ['primary', 'secondary', 'accent-cool'],
      description: 'Button color variant from Figma',
    },
    size: {
      control: 'select',
      options: ['medium', 'large'],
      description: 'Button size from Figma',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

// Primary variant (Purple)
export const Primary = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

// Secondary variant (Red)
export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};

// Accent Cool variant (Blue)
export const AccentCool = {
  args: {
    variant: 'accent-cool',
    label: 'Button',
  },
};

// Size variants
export const MediumSize = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Medium Button',
  },
};

export const LargeSize = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Large Button',
  },
};

// Disabled state
export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    label: 'Disabled',
  },
};

// All variants showcase
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" label="Primary" />
      <Button variant="secondary" label="Secondary" />
      <Button variant="accent-cool" label="Accent Cool" />
    </div>
  ),
};

// All sizes showcase
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" size="medium" label="Medium" />
      <Button variant="primary" size="large" label="Large" />
    </div>
  ),
};

// All states showcase
export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button variant="primary" label="Default" />
        <span style={{ fontSize: '14px', color: '#666' }}>Hover to see hover state</span>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button variant="primary" disabled label="Disabled" />
        <span style={{ fontSize: '14px', color: '#666' }}>Disabled state</span>
      </div>
    </div>
  ),
};
