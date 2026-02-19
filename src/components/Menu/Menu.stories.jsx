import React from 'react';
import Menu from './Menu';

export default {
  title: 'Components/Menu/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Left-hand navigation menu component with top navigation items, bottom utility items, and help section. Uses Relay design tokens for consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    activeItem: {
      control: 'select',
      options: ['campaigns', 'analytics', 'notifications', 'account', 'support'],
      description: 'Currently active menu item',
    },
    showHelpSection: {
      control: 'boolean',
      description: 'Show help section',
    },
    helpText: {
      control: 'text',
      description: 'Help section text',
    },
    helpAvatar: {
      control: 'text',
      description: 'Help section avatar image URL',
    },
    onNavigate: {
      action: 'navigate',
      description: 'Navigation callback',
    },
    onHelpClick: {
      action: 'help-clicked',
      description: 'Help section click callback',
    },
  },
};

// Default story
export const Default = {
  args: {
    activeItem: 'campaigns',
  },
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Menu {...args} />
      <div style={{ flex: 1, padding: '32px', background: 'var(--relay-gray-02)' }}>
        <h1 style={{ marginTop: 0 }}>Main Content Area</h1>
        <p>The menu is positioned on the left side.</p>
      </div>
    </div>
  ),
};

// With different active items
export const CampaignsActive = {
  args: {
    activeItem: 'campaigns',
  },
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Menu {...args} />
    </div>
  ),
};

export const AnalyticsActive = {
  args: {
    activeItem: 'analytics',
  },
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Menu {...args} />
    </div>
  ),
};

export const AccountActive = {
  args: {
    activeItem: 'account',
  },
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Menu {...args} />
    </div>
  ),
};

// Interactive navigation
export const InteractiveNavigation = {
  render: () => {
    const [activeItem, setActiveItem] = React.useState('campaigns');
    
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Menu 
          activeItem={activeItem} 
          onNavigate={setActiveItem}
          onHelpClick={() => alert('Help clicked!')}
        />
        <div style={{ flex: 1, padding: '32px', background: 'var(--relay-gray-02)' }}>
          <h1 style={{ marginTop: 0, textTransform: 'capitalize' }}>{activeItem}</h1>
          <p>Currently viewing: <strong>{activeItem}</strong></p>
          <p style={{ color: 'var(--relay-gray-07)' }}>Click any menu item to navigate.</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive menu with state management and navigation callback',
      },
    },
  },
};

// With avatar
export const WithAvatar = {
  args: {
    activeItem: 'campaigns',
    helpAvatar: 'https://i.pravatar.cc/150?img=12',
  },
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Menu {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu with help section avatar image',
      },
    },
  },
};

// Without help section
export const WithoutHelpSection = {
  args: {
    activeItem: 'campaigns',
    showHelpSection: false,
  },
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Menu {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu without the help section',
      },
    },
  },
};

// Custom menu items
export const CustomMenuItems = {
  args: {
    activeItem: 'dashboard',
    topMenuItems: [
      { id: 'dashboard', icon: 'analytics', label: 'Dashboard' },
      { id: 'projects', icon: 'campaign', label: 'Projects' },
      { id: 'tasks', icon: 'notifications', label: 'Tasks' },
      { id: 'reports', icon: 'analytics', label: 'Reports' },
    ],
    bottomMenuItems: [
      { id: 'settings', icon: 'settings', label: 'Settings' },
      { id: 'help', icon: 'support', label: 'Help Center' },
    ],
  },
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Menu {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu with custom menu items',
      },
    },
  },
};

// As links (for routing)
export const AsLinks = {
  args: {
    activeItem: 'campaigns',
    topMenuItems: [
      { id: 'campaigns', icon: 'campaign', label: 'Campaigns', href: '/campaigns' },
      { id: 'analytics', icon: 'analytics', label: 'Analytics', href: '/analytics' },
      { id: 'notifications', icon: 'notifications', label: 'Notifications', href: '/notifications' },
    ],
    bottomMenuItems: [
      { id: 'account', icon: 'account', label: 'Account', href: '/account' },
      { id: 'support', icon: 'support', label: 'Support', href: '/support' },
    ],
  },
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Menu {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu items rendered as anchor tags for use with routing libraries',
      },
    },
  },
};

// Minimal menu
export const MinimalMenu = {
  args: {
    activeItem: 'home',
    topMenuItems: [
      { id: 'home', icon: 'campaign', label: 'Home' },
      { id: 'settings', icon: 'settings', label: 'Settings' },
    ],
    bottomMenuItems: [],
    showHelpSection: false,
  },
  render: (args) => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Menu {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Minimal menu configuration with only top items',
      },
    },
  },
};

// Full page layout example
export const FullPageLayout = {
  render: () => {
    const [activeItem, setActiveItem] = React.useState('campaigns');
    
    const content = {
      campaigns: {
        title: 'Campaigns',
        description: 'Manage your marketing campaigns',
      },
      analytics: {
        title: 'Analytics',
        description: 'View performance metrics and insights',
      },
      notifications: {
        title: 'Notifications',
        description: 'Stay updated with important alerts',
      },
      account: {
        title: 'Account Settings',
        description: 'Manage your account preferences',
      },
      support: {
        title: 'Support',
        description: 'Get help and contact support',
      },
    };
    
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Menu 
          activeItem={activeItem} 
          onNavigate={setActiveItem}
          onHelpClick={() => window.open('https://support.example.com', '_blank')}
          helpAvatar="https://i.pravatar.cc/150?img=8"
        />
        <div style={{ flex: 1, padding: '48px', background: 'var(--relay-gray-02)', overflowY: 'auto' }}>
          <h1 style={{ 
            marginTop: 0, 
            fontSize: '32px', 
            color: 'var(--relay-purple-dark)',
            marginBottom: '16px'
          }}>
            {content[activeItem]?.title}
          </h1>
          <p style={{ 
            fontSize: '18px', 
            color: 'var(--relay-gray-07)',
            marginBottom: '32px'
          }}>
            {content[activeItem]?.description}
          </p>
          <div style={{
            background: 'white',
            padding: '24px',
            borderRadius: '8px',
            border: '1px solid var(--relay-gray-04)'
          }}>
            <p>Content for {activeItem} goes here...</p>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete page layout example with menu and content area',
      },
    },
  },
};
