import React from 'react';
import LinkButton from './LinkButton';

export default {
  title: 'Components/Button/LinkButton',
  component: LinkButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A link-style button component with optional arrow icons from Material Design. Can render as either a button or anchor tag. Uses Relay design tokens for consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button text content',
    },
    size: {
      control: 'select',
      options: ['xs', 'small', 'medium', 'large'],
      description: 'Size variant',
    },
    icon: {
      control: 'select',
      options: ['none', 'left', 'right'],
      description: 'Icon position (arrow)',
    },
    href: {
      control: 'text',
      description: 'URL for anchor tag variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
};

// Default story
export const Default = {
  args: {
    children: 'Link',
    size: 'medium',
    icon: 'none',
  },
};

// All sizes
export const ExtraSmall = {
  args: {
    children: 'Link',
    size: 'xs',
    icon: 'none',
  },
};

export const Small = {
  args: {
    children: 'Link',
    size: 'small',
    icon: 'none',
  },
};

export const Medium = {
  args: {
    children: 'Link',
    size: 'medium',
    icon: 'none',
  },
};

export const Large = {
  args: {
    children: 'Link',
    size: 'large',
    icon: 'none',
  },
};

// With left arrow icon
export const WithLeftArrow = {
  args: {
    children: 'Link',
    size: 'medium',
    icon: 'left',
  },
};

export const WithLeftArrowSmall = {
  args: {
    children: 'Link',
    size: 'small',
    icon: 'left',
  },
};

export const WithLeftArrowLarge = {
  args: {
    children: 'Link',
    size: 'large',
    icon: 'left',
  },
};

// With right arrow icon
export const WithRightArrow = {
  args: {
    children: 'Link',
    size: 'medium',
    icon: 'right',
  },
};

export const WithRightArrowSmall = {
  args: {
    children: 'Link',
    size: 'small',
    icon: 'right',
  },
};

export const WithRightArrowLarge = {
  args: {
    children: 'Link',
    size: 'large',
    icon: 'right',
  },
};

// All sizes with left arrow
export const AllSizesLeftArrow = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <LinkButton size="xs" icon="left">Link</LinkButton>
      <LinkButton size="small" icon="left">Link</LinkButton>
      <LinkButton size="medium" icon="left">Link</LinkButton>
      <LinkButton size="large" icon="left">Link</LinkButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All size variants with left arrow icon',
      },
    },
  },
};

// All sizes with right arrow
export const AllSizesRightArrow = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <LinkButton size="xs" icon="right">Link</LinkButton>
      <LinkButton size="small" icon="right">Link</LinkButton>
      <LinkButton size="medium" icon="right">Link</LinkButton>
      <LinkButton size="large" icon="right">Link</LinkButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All size variants with right arrow icon',
      },
    },
  },
};

// Disabled state
export const Disabled = {
  args: {
    children: 'Link',
    size: 'medium',
    icon: 'right',
    disabled: true,
  },
};

export const DisabledWithLeftArrow = {
  args: {
    children: 'Link',
    size: 'medium',
    icon: 'left',
    disabled: true,
  },
};

// As anchor tag
export const AsAnchorTag = {
  args: {
    children: 'Link',
    size: 'medium',
    icon: 'right',
    href: 'https://example.com',
  },
  parameters: {
    docs: {
      description: {
        story: 'Renders as an anchor tag when href prop is provided',
      },
    },
  },
};

// Interactive examples
export const InteractiveButton = {
  render: () => {
    const [count, setCount] = React.useState(0);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <LinkButton 
          size="medium" 
          icon="right"
          onClick={() => setCount(count + 1)}
        >
          Click me ({count})
        </LinkButton>
        <LinkButton 
          size="small" 
          icon="left"
          onClick={() => setCount(0)}
        >
          Reset counter
        </LinkButton>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive button example with onClick handlers',
      },
    },
  },
};

// Custom text examples
export const CustomText = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <LinkButton size="medium" icon="left">Go Back</LinkButton>
      <LinkButton size="medium" icon="right">Learn More</LinkButton>
      <LinkButton size="medium" icon="right">View Details</LinkButton>
      <LinkButton size="large" icon="left">Previous Page</LinkButton>
      <LinkButton size="large" icon="right">Next Page</LinkButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples with custom text labels',
      },
    },
  },
};

// All states comparison
export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Default</p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <LinkButton size="medium" icon="left">Link</LinkButton>
          <LinkButton size="medium">Link</LinkButton>
          <LinkButton size="medium" icon="right">Link</LinkButton>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Disabled</p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <LinkButton size="medium" icon="left" disabled>Link</LinkButton>
          <LinkButton size="medium" disabled>Link</LinkButton>
          <LinkButton size="medium" icon="right" disabled>Link</LinkButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all interactive states',
      },
    },
  },
};
