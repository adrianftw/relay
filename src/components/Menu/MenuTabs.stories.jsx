import React from 'react';
import MenuTabs from './MenuTabs';

export default {
  title: 'Components/Menu/MenuTabs',
  component: MenuTabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Navigation tab component with icons and text for menu navigation. Can render as either a button or anchor tag. Uses Relay design tokens for consistent styling.',
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
    children: {
      control: 'text',
      description: 'Tab text content',
    },
    active: {
      control: 'boolean',
      description: 'Active state',
    },
    href: {
      control: 'text',
      description: 'URL for anchor tag variant',
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
    icon: 'analytics',
    children: 'Analytics',
    active: false,
  },
};

// Active state
export const Active = {
  args: {
    icon: 'analytics',
    children: 'Analytics',
    active: true,
  },
};

// Passive state
export const Passive = {
  args: {
    icon: 'analytics',
    children: 'Analytics',
    active: false,
  },
};

// All menu items
export const AllMenuItems = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '200px' }}>
      <MenuTabs icon="campaign" active>Campaigns</MenuTabs>
      <MenuTabs icon="analytics">Analytics</MenuTabs>
      <MenuTabs icon="notifications">Notifications</MenuTabs>
      <MenuTabs icon="account">Account</MenuTabs>
      <MenuTabs icon="support">Support</MenuTabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example menu with all available items, showing active and passive states',
      },
    },
  },
};

// Interactive navigation example
export const InteractiveNavigation = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState('campaigns');
    
    const menuItems = [
      { id: 'campaigns', icon: 'campaign', label: 'Campaigns' },
      { id: 'analytics', icon: 'analytics', label: 'Analytics' },
      { id: 'notifications', icon: 'notifications', label: 'Notifications' },
      { id: 'account', icon: 'account', label: 'Account' },
      { id: 'support', icon: 'support', label: 'Support' },
    ];
    
    return (
      <div style={{ display: 'flex', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '200px' }}>
          {menuItems.map(item => (
            <MenuTabs
              key={item.id}
              icon={item.icon}
              active={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </MenuTabs>
          ))}
        </div>
        <div style={{ padding: '16px', border: '1px solid var(--relay-gray-04)', borderRadius: '4px', flex: 1 }}>
          <h3 style={{ marginTop: 0, fontSize: '18px' }}>
            {menuItems.find(item => item.id === activeTab)?.label}
          </h3>
          <p style={{ color: 'var(--relay-gray-07)' }}>
            Currently viewing: {activeTab}
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive menu navigation example with state management',
      },
    },
  },
};

// As links
export const AsLinks = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '200px' }}>
      <MenuTabs icon="campaign" href="/campaigns" active>Campaigns</MenuTabs>
      <MenuTabs icon="analytics" href="/analytics">Analytics</MenuTabs>
      <MenuTabs icon="notifications" href="/notifications">Notifications</MenuTabs>
      <MenuTabs icon="account" href="/account">Account</MenuTabs>
      <MenuTabs icon="support" href="/support">Support</MenuTabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu tabs rendered as anchor tags with href props',
      },
    },
  },
};

// Individual icon examples
export const Campaign = {
  args: {
    icon: 'campaign',
    children: 'Campaigns',
    active: false,
  },
};

export const Analytics = {
  args: {
    icon: 'analytics',
    children: 'Analytics',
    active: false,
  },
};

export const Notifications = {
  args: {
    icon: 'notifications',
    children: 'Notifications',
    active: false,
  },
};

export const Account = {
  args: {
    icon: 'account',
    children: 'Account',
    active: false,
  },
};

export const Support = {
  args: {
    icon: 'support',
    children: 'Support',
    active: false,
  },
};

// Long text example
export const LongText = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '200px' }}>
      <MenuTabs icon="analytics" active>
        This is a very long menu item text that will be truncated
      </MenuTabs>
      <MenuTabs icon="notifications">
        Another long text example for testing
      </MenuTabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu tabs with long text demonstrating text truncation',
      },
    },
  },
};

// States comparison
export const StatesComparison = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Passive</p>
          <div style={{ width: '200px' }}>
            <MenuTabs icon="analytics">Analytics</MenuTabs>
          </div>
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Active</p>
          <div style={{ width: '200px' }}>
            <MenuTabs icon="analytics" active>Analytics</MenuTabs>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of passive and active states',
      },
    },
  },
};
