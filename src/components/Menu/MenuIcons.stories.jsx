import React from 'react';
import MenuIcons from './MenuIcons';

export default {
  title: 'Components/Menu/MenuIcons',
  component: MenuIcons,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Icon components for menu navigation using Material Design icons with Relay design tokens.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: ['campaign', 'analytics', 'notifications', 'settings', 'account', 'support'],
      description: 'Icon type',
    },
    color: {
      control: 'select',
      options: ['purple', 'white'],
      description: 'Color variant',
    },
    size: {
      control: { type: 'number', min: 12, max: 48, step: 2 },
      description: 'Icon size in pixels',
    },
  },
};

// Default story
export const Default = {
  args: {
    icon: 'analytics',
    color: 'purple',
    size: 16,
  },
};

// All icons - Purple
export const AllIconsPurple = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="campaign" color="purple" size={16} />
        <span style={{ fontSize: '12px' }}>Campaign</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="analytics" color="purple" size={16} />
        <span style={{ fontSize: '12px' }}>Analytics</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="notifications" color="purple" size={16} />
        <span style={{ fontSize: '12px' }}>Notifications</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="settings" color="purple" size={16} />
        <span style={{ fontSize: '12px' }}>Settings</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="account" color="purple" size={16} />
        <span style={{ fontSize: '12px' }}>Account</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="support" color="purple" size={16} />
        <span style={{ fontSize: '12px' }}>Support</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available menu icons in purple color',
      },
    },
  },
};

// All icons - White (on dark background)
export const AllIconsWhite = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '16px', 
      flexWrap: 'wrap', 
      alignItems: 'center',
      background: 'var(--relay-purple-base)',
      padding: '24px',
      borderRadius: '4px'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="campaign" color="white" size={16} />
        <span style={{ fontSize: '12px', color: 'white' }}>Campaign</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="analytics" color="white" size={16} />
        <span style={{ fontSize: '12px', color: 'white' }}>Analytics</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="notifications" color="white" size={16} />
        <span style={{ fontSize: '12px', color: 'white' }}>Notifications</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="settings" color="white" size={16} />
        <span style={{ fontSize: '12px', color: 'white' }}>Settings</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="account" color="white" size={16} />
        <span style={{ fontSize: '12px', color: 'white' }}>Account</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="support" color="white" size={16} />
        <span style={{ fontSize: '12px', color: 'white' }}>Support</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available menu icons in white color',
      },
    },
  },
};

// Different sizes
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="analytics" color="purple" size={12} />
        <span style={{ fontSize: '10px' }}>12px</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="analytics" color="purple" size={16} />
        <span style={{ fontSize: '12px' }}>16px</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="analytics" color="purple" size={20} />
        <span style={{ fontSize: '12px' }}>20px</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MenuIcons icon="analytics" color="purple" size={24} />
        <span style={{ fontSize: '12px' }}>24px</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon size variants',
      },
    },
  },
};

// Individual icon stories
export const Campaign = {
  args: {
    icon: 'campaign',
    color: 'purple',
    size: 16,
  },
};

export const Analytics = {
  args: {
    icon: 'analytics',
    color: 'purple',
    size: 16,
  },
};

export const Notifications = {
  args: {
    icon: 'notifications',
    color: 'purple',
    size: 16,
  },
};

export const Settings = {
  args: {
    icon: 'settings',
    color: 'purple',
    size: 16,
  },
};

export const Account = {
  args: {
    icon: 'account',
    color: 'purple',
    size: 16,
  },
};

export const Support = {
  args: {
    icon: 'support',
    color: 'purple',
    size: 16,
  },
};
