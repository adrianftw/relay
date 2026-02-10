import { Button } from './Button';

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
      options: ['default', 'secondary', 'accent-cool', 'accent-warm', 'base', 'outline', 'inverse'],
    },
    size: {
      control: 'select',
      options: ['medium', 'big'],
    },
    outline: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Primary = {
  args: {
    variant: 'default',
    children: 'Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const AccentCool = {
  args: {
    variant: 'accent-cool',
    children: 'Button',
  },
};

export const AccentWarm = {
  args: {
    variant: 'accent-warm',
    children: 'Button',
  },
};

export const Big = {
  args: {
    variant: 'default',
    size: 'big',
    children: 'Big Button',
  },
};

export const Outline = {
  args: {
    variant: 'default',
    outline: true,
    children: 'Outline Button',
  },
};

export const Disabled = {
  args: {
    variant: 'default',
    disabled: true,
    children: 'Disabled Button',
  },
};
