import { Button } from './Button';

/**
 * Button component - ready to be styled from Figma
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
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    label: 'Button',
  },
};

export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Small',
  },
};

export const Large = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Large',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    label: 'Disabled',
  },
};
