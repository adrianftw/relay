import React from 'react';
import { BackButton } from './BackButton';

export default {
  title: 'Components/Button/BackButton',
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button text content',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    href: {
      control: 'text',
      description: 'URL to navigate to (renders as anchor tag)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
};

// Default story
export const Default = {
  args: {
    children: 'Back',
  },
};

// With custom text
export const CustomText = {
  args: {
    children: 'Back to Campaigns',
  },
};

// As link
export const AsLink = {
  args: {
    children: 'Back to Home',
    href: '/',
  },
};

// With onClick handler
export const WithOnClick = {
  args: {
    children: 'Go Back',
    onClick: () => alert('Back button clicked!'),
  },
};

// Size variants
export const Small = {
  args: {
    children: 'Back',
    size: 'small',
  },
};

export const Medium = {
  args: {
    children: 'Back',
    size: 'medium',
  },
};

export const Large = {
  args: {
    children: 'Back',
    size: 'large',
  },
};

// Disabled state
export const Disabled = {
  args: {
    children: 'Back',
    disabled: true,
  },
};

// All sizes comparison
export const AllSizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
    <BackButton size="small">Back (Small)</BackButton>
    <BackButton size="medium">Back (Medium)</BackButton>
    <BackButton size="large">Back (Large)</BackButton>
  </div>
);
