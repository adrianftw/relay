import React from 'react';
import { Navigation } from './Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    logoSrc: {
      control: 'text',
      description: 'URL or path to the logo image',
    },
    logoAlt: {
      control: 'text',
      description: 'Alt text for the logo',
    },
    title: {
      control: 'text',
      description: 'Title text displayed next to the logo',
    },
    avatarText: {
      control: 'text',
      description: 'Text displayed in the avatar circle',
    },
    notificationTooltip: {
      control: 'text',
      description: 'Tooltip text for the notification icon',
    },
    avatarTooltip: {
      control: 'text',
      description: 'Tooltip text for the avatar',
    },
    onNotificationClick: {
      action: 'notification clicked',
      description: 'Callback when notification icon is clicked',
    },
    onAvatarClick: {
      action: 'avatar clicked',
      description: 'Callback when avatar is clicked',
    },
  },
};

// Wrapper for full-width display
const FullWidthWrapper = ({ children }) => (
  <div style={{ width: '100%', minHeight: '60px' }}>
    {children}
  </div>
);

export const Default = {
  args: {
    logoSrc: 'http://localhost:3845/assets/90a55255a065ff32c2e312ff48b05a5fc5be5fb6.svg',
    logoAlt: 'USPS Logo',
    title: 'Every Door Direct Mail',
    avatarText: 'A',
    notificationTooltip: 'Notifications',
    avatarTooltip: 'Account',
  },
  render: (args) => (
    <FullWidthWrapper>
      <Navigation {...args} />
    </FullWidthWrapper>
  ),
};

export const WithoutLogo = {
  args: {
    logoSrc: null,
    title: 'Every Door Direct Mail',
    avatarText: 'A',
    notificationTooltip: 'Notifications',
    avatarTooltip: 'Account',
  },
  render: (args) => (
    <FullWidthWrapper>
      <Navigation {...args} />
    </FullWidthWrapper>
  ),
};

export const CustomTitle = {
  args: {
    logoSrc: 'http://localhost:3845/assets/90a55255a065ff32c2e312ff48b05a5fc5be5fb6.svg',
    logoAlt: 'USPS Logo',
    title: 'Campaign Management',
    avatarText: 'A',
    notificationTooltip: 'Notifications',
    avatarTooltip: 'Account',
  },
  render: (args) => (
    <FullWidthWrapper>
      <Navigation {...args} />
    </FullWidthWrapper>
  ),
};

export const DifferentAvatar = {
  args: {
    logoSrc: 'http://localhost:3845/assets/90a55255a065ff32c2e312ff48b05a5fc5be5fb6.svg',
    logoAlt: 'USPS Logo',
    title: 'Every Door Direct Mail',
    avatarText: 'JD',
    notificationTooltip: 'Notifications',
    avatarTooltip: 'John Doe',
  },
  render: (args) => (
    <FullWidthWrapper>
      <Navigation {...args} />
    </FullWidthWrapper>
  ),
};

export const CustomTooltips = {
  args: {
    logoSrc: 'http://localhost:3845/assets/90a55255a065ff32c2e312ff48b05a5fc5be5fb6.svg',
    logoAlt: 'USPS Logo',
    title: 'Every Door Direct Mail',
    avatarText: 'A',
    notificationTooltip: 'View alerts and updates',
    avatarTooltip: 'User profile and settings',
  },
  render: (args) => (
    <FullWidthWrapper>
      <Navigation {...args} />
    </FullWidthWrapper>
  ),
};

export const WithClickHandlers = {
  args: {
    logoSrc: 'http://localhost:3845/assets/90a55255a065ff32c2e312ff48b05a5fc5be5fb6.svg',
    logoAlt: 'USPS Logo',
    title: 'Every Door Direct Mail',
    avatarText: 'A',
    notificationTooltip: 'Notifications',
    avatarTooltip: 'Account',
    onNotificationClick: () => alert('Notification icon clicked!'),
    onAvatarClick: () => alert('Avatar clicked!'),
  },
  render: (args) => (
    <FullWidthWrapper>
      <Navigation {...args} />
    </FullWidthWrapper>
  ),
};

export const Interactive = {
  args: {
    logoSrc: 'http://localhost:3845/assets/90a55255a065ff32c2e312ff48b05a5fc5be5fb6.svg',
    logoAlt: 'USPS Logo',
    title: 'Every Door Direct Mail',
    avatarText: 'A',
    notificationTooltip: 'Notifications',
    avatarTooltip: 'Account',
  },
  render: (args) => {
    const [notificationCount, setNotificationCount] = React.useState(0);
    const [avatarClicks, setAvatarClicks] = React.useState(0);

    return (
      <>
        <FullWidthWrapper>
          <Navigation 
            {...args}
            onNotificationClick={() => setNotificationCount(notificationCount + 1)}
            onAvatarClick={() => setAvatarClicks(avatarClicks + 1)}
          />
        </FullWidthWrapper>
        <div style={{ padding: '20px', fontFamily: 'Helvetica, sans-serif' }}>
          <p>Notification clicks: {notificationCount}</p>
          <p>Avatar clicks: {avatarClicks}</p>
        </div>
      </>
    );
  },
};
