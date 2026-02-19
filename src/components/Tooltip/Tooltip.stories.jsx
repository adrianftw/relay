import React from 'react';
import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'The tooltip text to display',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the tooltip relative to the trigger element',
    },
    delay: {
      control: 'number',
      description: 'Delay in milliseconds before showing the tooltip',
    },
  },
};

// Wrapper for positioning examples
const TooltipWrapper = ({ children, style = {} }) => (
  <div style={{ 
    padding: '80px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    ...style 
  }}>
    {children}
  </div>
);

export const Default = {
  args: {
    content: 'This is a tooltip',
    position: 'bottom',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
  },
  render: (args) => (
    <TooltipWrapper>
      <Tooltip {...args} />
    </TooltipWrapper>
  ),
};

export const Top = {
  args: {
    content: 'Tooltip on top',
    position: 'top',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
  },
  render: (args) => (
    <TooltipWrapper>
      <Tooltip {...args} />
    </TooltipWrapper>
  ),
};

export const Bottom = {
  args: {
    content: 'Tooltip on bottom',
    position: 'bottom',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
  },
  render: (args) => (
    <TooltipWrapper>
      <Tooltip {...args} />
    </TooltipWrapper>
  ),
};

export const Left = {
  args: {
    content: 'Tooltip on left',
    position: 'left',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
  },
  render: (args) => (
    <TooltipWrapper>
      <Tooltip {...args} />
    </TooltipWrapper>
  ),
};

export const Right = {
  args: {
    content: 'Tooltip on right',
    position: 'right',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
  },
  render: (args) => (
    <TooltipWrapper>
      <Tooltip {...args} />
    </TooltipWrapper>
  ),
};

export const LongText = {
  args: {
    content: 'This is a longer tooltip with more information',
    position: 'bottom',
    children: <button style={{ padding: '8px 16px' }}>Hover for long text</button>,
  },
  render: (args) => (
    <TooltipWrapper>
      <Tooltip {...args} />
    </TooltipWrapper>
  ),
};

export const OnIcon = {
  args: {
    content: 'Notifications',
    position: 'bottom',
    children: (
      <button style={{ 
        background: 'transparent', 
        border: 'none', 
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
        fontSize: '24px'
      }}>
        🔔
      </button>
    ),
  },
  render: (args) => (
    <TooltipWrapper>
      <Tooltip {...args} />
    </TooltipWrapper>
  ),
};

export const FastDelay = {
  args: {
    content: 'Quick tooltip',
    position: 'bottom',
    delay: 0,
    children: <button style={{ padding: '8px 16px' }}>Instant tooltip</button>,
  },
  render: (args) => (
    <TooltipWrapper>
      <Tooltip {...args} />
    </TooltipWrapper>
  ),
};

export const SlowDelay = {
  args: {
    content: 'Slow tooltip',
    position: 'bottom',
    delay: 1000,
    children: <button style={{ padding: '8px 16px' }}>Slow tooltip (1s delay)</button>,
  },
  render: (args) => (
    <TooltipWrapper>
      <Tooltip {...args} />
    </TooltipWrapper>
  ),
};
